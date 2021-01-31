import React, { useState } from 'react'
import { useRouter } from 'next/router'
import db from '../../db.json'

import Input from '../components/Input'
import Form from '../components/Form'
import Options from '../components/Options'
import PageDefault from '../components/PageDefault'
import QuizButton from '../components/QuizButton'
import Widget from '../components/Widget'

export default function Home() {
  const router = useRouter()
  const [name, setName] = useState('')

  const handleQuizPage = (e) => {
    e.preventDefault()
    router.push({
      pathname: '/quiz',
      query: { name },
    })
  }

  const handleName = (e) => {
    setName(e.target.value)
  }

  return (
    <PageDefault
      bg={db.bg}
    >
      <Widget
        delay={0}
        yValue="-100%"
        headerTitle={db.title}
        description={db.description}
      >
        <Form
          text="Jogar"
          onSubmit={handleQuizPage}
          disabled={name.length === 0}
        >
          <Input
            onChange={handleName}
            name="name"
            type="text"
            placeholder="Digite seu nome"
          />
        </Form>
      </Widget>
      <Widget
        delay={0.5}
        yValue="100%"
        headerTitle="Quizes da galera"
        description="De uma olhada nesses outros quizes, feito pelo pessoal durante a Imersão React:"
      >
        {
          db.external.map((link, index) => {
            const [projectName, githubUser] = link.replace(/^(?:https?:\/\/)|(.vercel.app)/g, '').split('.')
            return (
              // <Link
              //   key={index}
              //   href={`/quiz/${projectName}.${githubUser}`}
              // >
                
              // </Link>
              <Options
                user={githubUser}
                project={projectName}
                href={`/quiz/${projectName}.${githubUser}`}
              >
              </Options>
            )
          })
        }
        <QuizButton
          as="a"
          href="https://aluraquiz-base.alura-challenges.vercel.app/contribuidores"
          text="Vitrine alura"
        />
      </Widget>
    </PageDefault>
  )
}
