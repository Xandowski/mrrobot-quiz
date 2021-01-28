import React, { Children } from 'react'
import PlayButton from '../QuizButton'
import Footer from '../Footer'
import GitHubCorner from '../GitHubCorner'
import QuizBackground from '../QuizBackground'
import QuizContainer from '../QuizContainer'
import QuizLogo from '../QuizLogo'

const PageDefault = ({bg, widget}) => {
  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {widget}
      </QuizContainer>
      <Footer />
      <GitHubCorner projectUrl="https://github.com/Xandowski/mrrobot-quiz" />
    </QuizBackground>
  )
}


export default PageDefault