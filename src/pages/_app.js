import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'
import React from 'react'
import db from '../../db.json'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  @font-face {
    font-family: 'MrRobot';
    src: url('/fonts/MrRobot.ttf') format('truetype');
  }
`

const { theme } = db

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mr.Robot Quiz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <meta name="title" content="Mr.robot" key="title" />
        <meta name="description" content="" key="description" />

        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://mrrobot-quiz.xandowski.vercel.app/" key="url" />
        <meta property="og:title" content="Mr.robot" key="ogtitle" />
        <meta property="og:description" content="" key="ogdescription" />
        <meta property="og:image" content={db.bg} key="ogimage" />

        <meta property="twitter:card" content="summary_large_image" key="twittercard" />
        <meta property="twitter:url" content="https://mrrobot-quiz.xandowski.vercel.app/" key="twitterurl" />
        <meta property="twitter:title" content="Mr.robot" key="twittertitle" />
        <meta property="twitter:description" content="" key="twitterdescription" />
        <meta property="twitter:image" content={db.bg} key="twitterimage" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
