import db from '../../db.json'
import { useRouter } from 'next/router'
import { useState } from 'react'

import PageDefault from '../components/PageDefault'
import Input from '../components/Input'
import Widget from '../components/Widget'
import Options from '../components/Options'

export default function Home() {
  const router = useRouter()
  let [name, setName] = useState('')

  return (
    <PageDefault
      widget={
        <Widget
          headerTitle={db.title}
          description={db.description}
          onSubmit={function (e) {
            e.preventDefault()
            router.push({
              pathname: '/quiz',
              query: {name: name}
            })
          }}
          element={
            <Input
              onChange={function (e) {
                setName(e.target.value)
              }}
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />
          }
          disabled={name.length === 0}
          text='Jogar'
        />
      }
      quizesGalera={
        <Widget
          headerTitle='Quizes da galera'
          description='De uma olhada nesses outros quizes relacionados a filmes e séries, feito pelo pessoal da Imersão React:'
          element={
            db.external.map((link, index)=> {
              return <Options 
                key={index}
                links={link}
              />
            })
          }
        />
      }
    />
  )
}