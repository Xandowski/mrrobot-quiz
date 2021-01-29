import React, { Children } from 'react'
import PlayButton from '../QuizButton'
import db from '../../../db.json'
import Footer from '../Footer'
import GitHubCorner from '../GitHubCorner'
import QuizBackground from '../QuizBackground'
import QuizContainer from '../QuizContainer'
import QuizLogo from '../QuizLogo'

const PageDefault = ({widget, quizesGalera}) => {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {widget}
        {quizesGalera}
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl="https://github.com/Xandowski/mrrobot-quiz" />
    </QuizBackground>
  )
}


export default PageDefault