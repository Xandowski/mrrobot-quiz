import React from 'react'
import Footer from '../Footer'
import GitHubCorner from '../GitHubCorner'
import QuizBackground from '../QuizBackground'
import QuizContainer from '../QuizContainer'
import QuizLogo from '../QuizLogo'

const PageDefault = ({ children, bg }) => (
  <QuizBackground backgroundImage={bg}>
    <QuizContainer>
      <QuizLogo />
      {children}
    </QuizContainer>
    <Footer />
    <GitHubCorner projectUrl="https://github.com/Xandowski/mrrobot-quiz" />
  </QuizBackground>
)

export default PageDefault
