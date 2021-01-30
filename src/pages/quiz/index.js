import QuizScreen from '../../screens/Quiz'
import db from '../../../db.json'

const QuizPage = () => {
  return (
    <QuizScreen
      quizName='Mr. Robot'
      database={db}
    />
  )
}

export default QuizPage