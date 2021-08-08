import React from 'react'
import QuizScreen from '../../screens/Quiz'
import db from '../../../db.json'

const QuizPage = () => (
  <QuizScreen
    quizName="Mr. Robot"
    database={db}
  />
)

export default QuizPage
