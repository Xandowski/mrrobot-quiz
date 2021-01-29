import React from 'react'
import Lottie from 'react-lottie'
import db from '../../db.json'
import animationData from '../../animation.json'
import correctAnimationData from '../../correctAnimation.json'
import wrongAnimationData from '../../wrongAnimation.json'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import PageDefault from '../components/PageDefault'
import Options from '../components/Options'
import Widget from '../components/Widget'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

const QuizPage = () => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })
  const [isQuestionSubmited, setIsQuestionSubmited] = useState()
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const router = useRouter()
  const {query: {name}} = router
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = db.questions[questionIndex]
  const questionId = `question__${questionIndex+1}`
  const [image, setImage] = useState(question.image)
  const [description, setDescription] = useState(question.description)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined
  
  const [points, setPoints] = useState(0)
  
  const defaultOptions = {
    loop: false,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 1.5,
  }

  const defaultCorrectOptions = {
    loop: false,
    autoplay: true, 
    animationData: correctAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 1.5,
  }

  const defaultWrongOptions = {
    loop: false,
    autoplay: true, 
    animationData: wrongAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
    speed: 1.5,
  }
  
  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000)  
  }, [])
  
  const handleSubmit = () => {
    if(questionIndex === 4) {
      setQuestionIndex(0)
      setScreenState(screenStates.RESULT)
      setDescription(name)
      return
    }
    setQuestionIndex(questionIndex+1)
    setImage(db.questions[questionIndex+1].image)
    setDescription(db.questions[questionIndex+1].description)
    setScreenState(screenStates.QUIZ)
    setSelectedAlternative(undefined)
  }

  return (
    <>
      {screenState === screenStates.QUIZ && (
        <PageDefault
          widget={
            <Widget
              headerTitle={`Pergunta ${questionIndex+1} de ${db.questions.length}`}
              description={description}
              onSubmit={(e) => {
                e.preventDefault()
                

                if(selectedAlternative === question.answer){
                  setPoints(points+10)
                  setImage('https://media.giphy.com/media/l4EpkVLqUj8BI7OV2/giphy.gif')
                  setDescription(
                    <Lottie
                      options={defaultCorrectOptions}
                      height={50}
                      width={50}
                      isStopped={animationState.isStopped}
                      isPaused={animationState.isPaused}
                    />
                  )
                } else {
                  setImage('https://media.giphy.com/media/8hY1xmC9NIoDu/giphy.gif')
                  setDescription(
                    <Lottie
                      options={defaultWrongOptions}
                      height={50}
                      width={50}
                      isStopped={animationState.isStopped}
                      isPaused={animationState.isPaused}
                    />
                  )
                }
                setIsQuestionSubmited(true)
                setTimeout(() => {
                  setIsQuestionSubmited(false)
                  handleSubmit()
                }, 2 * 1000)
              }}
              element={
                question.alternatives.map((alternative, index) => {
                  const alternativeId = `alternative__${index}`
                  const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
                  const isSelected = selectedAlternative === index
                  console.log(isCorrect);
                  return <Options
                    key={index}
                    htmlFor={alternativeId}
                    dataSelected={isSelected}
                    dataStatus={isQuestionSubmited && alternativeStatus}
                    input={
                      <input 
                        type="radio"
                        id={alternativeId}
                        name={questionId} 
                        onChange={() => setSelectedAlternative(index)}
                      />
                    }
                    alternative={alternative}
                  />
                })
              }
              text='Confirmar'
              img={image}
              question={question.title}
              disabled={!hasAlternativeSelected}
            />
            }
          />
      )}

      {screenState === screenStates.LOADING && (
        <PageDefault
          widget={
            <Widget
              headerTitle='Loading'
              description='Aguarde'
              onSubmit={function (e) {
                e.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
              element={
                <Lottie
                  options={defaultOptions}
                  height={250}
                  width={250}
                  isStopped={animationState.isStopped}
                  isPaused={animationState.isPaused}
                />
              }
            />
          }
        />
      )}

      {screenState === screenStates.RESULT && (
        <PageDefault
          widget={
            <Widget
              headerTitle='Resultado'
              question={`Você fez ${points} pontos`}
              description={description}
              onSubmit={function (e) {
                e.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
              element={
                <h1>Ranking</h1>
              }
              text='Adicionar ao meu projeto'
              link='/'
            />
        }
      />
      )}
      
    </>
  )
}

export default QuizPage