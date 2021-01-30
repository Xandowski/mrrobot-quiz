import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'

import Lottie from 'react-lottie'
import animationData from '../../../animation.json'
import correctAnimationData from '../../../correctAnimation.json'
import wrongAnimationData from '../../../wrongAnimation.json'

import PageDefault from '../../components/PageDefault'
import Options from '../../components/Options'
import Widget from '../../components/Widget'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

const QuizScreen = ({ database }) => {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined)
  const [isQuestionSubmited, setIsQuestionSubmited] = useState()
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const router = useRouter()
  const { query: { name } } = router
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = database.questions[questionIndex]
  const questionId = `question__${questionIndex + 1}`
  const [image, setImage] = useState(question.image)
  const [description, setDescription] = useState(question.description)
  const isCorrect = selectedAlternative === question.answer
  const hasAlternativeSelected = selectedAlternative !== undefined

  const [points, setPoints] = useState(0)

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5,
  }

  const defaultCorrectOptions = {
    loop: false,
    autoplay: true,
    animationData: correctAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5,
  }

  const defaultWrongOptions = {
    loop: false,
    autoplay: true,
    animationData: wrongAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
    speed: 1.5,
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ)
    }, 1 * 1000)
  }, [])

  const handleSubmit = () => {
    if (questionIndex === 4) {
      setQuestionIndex(0)
      setScreenState(screenStates.RESULT)
      setDescription(name)
      return
    }
    setQuestionIndex(questionIndex + 1)
    setImage(database.questions[questionIndex + 1].image)
    setDescription(database.questions[questionIndex + 1].description)
    setScreenState(screenStates.QUIZ)
    setSelectedAlternative(undefined)
  }

  const loadingScreen = (e) => {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  const loadResults = (e) => {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  return (
    <>
    <ThemeProvider theme={database.theme}>
      {screenState === screenStates.QUIZ && (
        <PageDefault
          bg={database.bg}
          widget={(
            <Widget
              headerTitle={`Pergunta ${questionIndex + 1} de ${database.questions.length}`}
              description={description}
              onSubmit={(e) => {
                e.preventDefault()

                if (selectedAlternative === question.answer) {
                  setPoints(points + 10)
                  setImage('/images/gif-correct-question.webp')
                  setDescription(
                    <Lottie
                      options={defaultCorrectOptions}
                      height={50}
                      width={50}
                    />,
                  )
                } else {
                  setImage('/images/gif-wrong-question.webp')
                  setDescription(
                    <Lottie
                      options={defaultWrongOptions}
                      height={50}
                      width={50}
                    />,
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
                  return (
                    <Options
                      key={alternativeId}
                      as="label"
                      htmlFor={alternativeId}
                      dataSelected={isSelected}
                      dataStatus={isQuestionSubmited && alternativeStatus}
                      input={(
                        <input
                          type="radio"
                          id={alternativeId}
                          name={questionId}
                          onChange={() => setSelectedAlternative(index)}
                        />
                    )}
                      alternative={alternative}
                    />
                  )
                })
              }
              text="Confirmar"
              img={image}
              question={question.title}
              disabled={!hasAlternativeSelected}
            />
          )}
        />
      )}

      {screenState === screenStates.LOADING && (
        <PageDefault
          widget={(
            <Widget
              headerTitle="Loading"
              description="Aguarde"
              onSubmit={loadingScreen}
              element={(
                <Lottie
                  options={defaultOptions}
                  height={250}
                  width={250}
                />
              )}
            />
          )}
        />
      )}

      {screenState === screenStates.RESULT && (
        <PageDefault
          widget={(
            <Widget
              headerTitle="Resultado"
              question={`Você fez ${points} pontos`}
              description={description}
              onSubmit={loadResults}
              element={
                <h1>Ranking</h1>
              }
              text="Adicionar ao meu projeto"
              link="/"
            />
          )}
        />
      )}
    </ThemeProvider>
    </>
  )
}

Options.propTypes = {
  database: PropTypes.shape,
}

Options.defaultProps = {
  database: null,
}

export default QuizScreen
