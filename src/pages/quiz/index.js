import QuizScreen from '../../screens/Quiz'
import db from '../../../db.json'

const QuizPage = () => {
  return (
    <QuizScreen
      database={db}
    />
  )
}

export default QuizPage