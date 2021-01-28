import React from 'react'
import db from '../../db.json'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import PageDefault from '../components/PageDefault'
import Options from '../components/Options'
import Widget from '../components/Widget'

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT'
}

const QuizPage = () => {
  const [screenState, setScreenState] = useState(screenStates.LOADING)
  const router = useRouter()
  const [questionIndex, setQuestionIndex] = useState(0)
  const question = db.questions[questionIndex]
  const questionId = `question__${questionIndex+1}`

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000)  
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if(questionIndex === 4) {
      setScreenState(screenStates.RESULT)
      setQuestionIndex(0)
    }

    setQuestionIndex(questionIndex + 1)
  }

  return (
    <>
      {screenState === screenStates.QUIZ && (
        <PageDefault 
          bg={db.bg}
          widget={
            <Widget
              headerTitle={`Pergunta ${questionIndex+1} de ${db.questions.length}`}
              description={question.description}
              onSubmit={handleSubmit}
              element={
                question.alternatives.map((alternative, index) => {
                  const alternativeId = `alternative__${index}`
                  return <Options
                    htmlFor={alternativeId}
                    input={
                      <input 
                        type="radio"
                        id={alternativeId}
                        name={questionId}  
                      />
                    }
                    alternative={alternative}
                  />
                })
              }
              text='Confirmar'
              img={question.image}
              question={question.title}
            />
          }
        />
      )}

      {screenState === screenStates.LOADING && (
        <PageDefault
          bg={db.bg}
          widget={
            <Widget
              headerTitle='Loading'
              description='Aguarde'
              onSubmit={function (e) {
                e.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
              element={
                <h1>Testando</h1>
              }
            />
          }
        />
      )}

      {screenState === screenStates.RESULT && (
        <PageDefault
          bg={db.bg}
          widget={
            <Widget
              headerTitle='Resultado'
              description='Mandou bem'
              onSubmit={function (e) {
                e.preventDefault()
                router.push(`/quiz?name=${name}`)
              }}
              element={
                <h1>Total de Pontos</h1>
              }
              text='Adicionar ao meu projeto'
              link={<a href="/">Voltar para home</a>}
              fontSize={True}
            >
            </Widget>
          }
        />
      )}
    </>
  )
}


export default QuizPage