import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import Lottie from 'react-lottie'
import animationData from '../../../animation.json'
import correctAnimationData from '../../../correctAnimation.json'
import wrongAnimationData from '../../../wrongAnimation.json'

import PageDefault from '../../components/PageDefault'
import Form from '../../components/Form'
import Options from '../../components/Options'
import Widget from '../../components/Widget'
import BackLinkArrow from '../../components/BackLinkArrow'
import QuizButton from '../../components/QuizButton'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
}

const QuizScreen = ({ database, quizName }) => {
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
  const maxPoints = 10 * database.questions.length
  const [questionResults, setQuestionResults] = useState([])

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
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
    }, 2 * 1000)
  }, [])

  const handleSubmit = () => {
    if (questionIndex === 4) {
      setQuestionIndex(0)
      setScreenState(screenStates.RESULT)
      setDescription(name)
      handleResults(points)
      setPoints(0)
      return
    }
    setQuestionIndex(questionIndex + 1)
    setImage(database.questions[questionIndex + 1].image)
    setDescription(database.questions[questionIndex + 1].description)
    setScreenState(screenStates.QUIZ)
    setSelectedAlternative(undefined)
  }

  const loadingScreen = (e) => {
    setQuestionResults([])
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  const loadResults = (e) => {
    e.preventDefault()
    router.push(`/quiz?name=${name}`)
  }

  const addResult = (questionResult) => {
    setQuestionResults([
      ...questionResults,
      questionResult,
    ]);
  }

  const [result, setResult] = useState('')

  const handleResults = (points) => {
    if(points <= (20/100) * maxPoints ) {
      setResult(`${name}, parece que você não assistiu a série fez apenas ${points} pontos`)
      return
    } else if (points > (20/100) * maxPoints && points <= (60/100) * maxPoints) {
      setResult(`${name} você prestou atenção na séie?Fez ${points} pontos`)
      return
    }
    setResult(`Muito bem ${name} parece que você conhece a série fez ${points} pontos`)
    return
  }

  return (
    <>
    <ThemeProvider theme={database.theme}>
      {screenState === screenStates.QUIZ && (
        <PageDefault
          bg={database.bg}
        >
          <Widget
            backLink={
              <BackLinkArrow
                href="/"
              />
            }
            headerTitle={`Pergunta ${questionIndex + 1} de ${database.questions.length}`}
            description={description}
            img={image}
            question={question.title}
            disabled={!hasAlternativeSelected}
          >
            <Form
              text="Confirmar"
              disabled={!hasAlternativeSelected}
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
                  addResult(isCorrect)
                  setIsQuestionSubmited(false)
                  handleSubmit()
                }, 2 * 1000)
              }}
            >
              {
                question.alternatives.map((alternative, index) => {
                  const alternativeId = `alternative__${index}`
                  const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR'
                  const isSelected = selectedAlternative === index
                  return (
                    <Options
                      as="label"
                      xValue="-100%"
                      delay={index}
                      key={alternativeId}
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
            </Form>
          </Widget>
        </PageDefault>
      )}

      {screenState === screenStates.LOADING && (
        
        <PageDefault
        >
          <Widget
              headerTitle="Loading"
              description={`Carregando quiz ${quizName}`}
            >
              <Lottie
                options={defaultOptions}
                height={250}
                width={250}
              />
            </Widget>
        </PageDefault>
      )}

      {screenState === screenStates.RESULT && (
        <PageDefault
          bg={database.bg}
        >
          <Widget
            backLink={
              <BackLinkArrow
                href="/"
              />
            }
            headerTitle="Resultado"
            question={result}
            description="Confira as questões:"
            onSubmit={loadResults}
            text="Adicionar ao meu projeto"
            link="/"
          >
            {
              questionResults.map((questionResult, index) => (
                <Options
                  as="label"
                  isLabelResult={true}
                  correct={questionResult}
                  delay={index}
                  xValue="-100%"
                  status={questionResult}
                  key={`result__${index}`}
                  input={
                    `Questão ${index + 1}: ${questionResult === true ? 'Acertou' : 'Errou'}` 
                  }
                />
              ))
            }
            <QuizButton
              as="a"
              href="https://www.imdb.com/title/tt4158110/"
              text="+MR. ROBOT"
            />
          </Widget>
        </PageDefault>
      )}
    </ThemeProvider>
    </>
  )
}

export default QuizScreen
