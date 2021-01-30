import { useRouter } from 'next/router'
import Link from 'next/link'
import React, { useState } from 'react'
import db from '../../db.json'

import PageDefault from '../components/PageDefault'
import Input from '../components/Input'
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
      widget={(
        <Widget
          headerTitle={db.title}
          description={db.description}
          onSubmit={handleQuizPage}
          element={(
            <Input
              onChange={handleName}
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />
          )}
          disabled={name.length === 0}
          text="Jogar"
        />
      )}
      quizesGalera={(
        <Widget
          headerTitle="Quizes da galera"
          description="De uma olhada nesses outros quizes, feito pelo pessoal durante a Imersão React:"
          element={
            db.external.map((link, index) => {
              const [projectName, githubUser] = link.replace(/^(?:https?:\/\/)|(.vercel.app)/g, '').split('.')
              return (
                <Link
                  key={index}
                  href={`/quiz/${projectName}.${githubUser}`}
                >
                  <a>
                    {`${githubUser}/${projectName}`}
                  </a>
                </Link>
              )
            })
          }
        />
      )}
    />
  )
}
