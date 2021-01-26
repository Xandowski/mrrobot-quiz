import db from '../db.json'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Mr.robot</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Vamos ver se você sabe tudo sobre Mr.robot!!</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <h2>Quizes da galera</h2>
        </Widget>
      </QuizContainer>
      <Footer/>
      <GitHubCorner projectUrl="https://github.com/Xandowski/mrrobot-quiz"/>
    </QuizBackground>
  )
}
