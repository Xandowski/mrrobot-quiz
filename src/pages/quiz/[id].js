import React from 'react'
import QuizScreen from '../../screens/Quiz'

const QuizDaGalera = ({ externalDb }) => {
  return (
    <QuizScreen
      database={externalDb}
    />
  )
}
  
export async function getServerSideProps(context) {
  const externalDb = await fetch(`https://${context.query.id}.vercel.app/api/db`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Falha ao pegar os dados')
    })
    .then((convertedResponse) => convertedResponse)
    .catch((err) => err)
  return {
    props: {
      externalDb,
    },
  }
}

export default QuizDaGalera
