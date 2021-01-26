import db from '../db.json'
import QuizButton from '../src/components/QuizButton'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizForm from '../src/components/QuizForm'
import QuizLogo from '../src/components/QuizLogo'
import Widget from '../src/components/Widget'

import Head from 'next/head'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Mr.Robot Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport"/>
        <meta name="title" content="Mr.robot" key="title"/>
        <meta name="description" content="" key="description"/>

        <meta property="og:type" content="website" key="type"/>
        <meta property="og:url" content="https://mrrobot-quiz.xandowski.vercel.app/" key="url"/>
        <meta property="og:title" content="Mr.robot" key="ogtitle"/>
        <meta property="og:description" content="" key="ogdescription"/>
        <meta property="og:image" content="" key="ogimage"/>

        <meta property="twitter:card" content="summary_large_image" key="twittercard"/>
        <meta property="twitter:url" content="https://mrrobot-quiz.xandowski.vercel.app/" key="twitterurl"/>
        <meta property="twitter:title" content="Mr.robot" key="twittertitle"/>
        <meta property="twitter:description" content="" key="twitterdescription"/>
        <meta property="twitter:image" content="" key="twitterimage"/>
      </Head>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
          <Widget.Header>
            <h1>Mr.robot</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Vamos ver se você sabe tudo sobre Mr.robot!!</p>
            <QuizForm>
              <input type="text" placeholder=""/>
            </QuizForm>
            <QuizButton>
              Jogar
            </QuizButton>
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
