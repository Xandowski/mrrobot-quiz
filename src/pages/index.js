import db from '../../db.json'
import { useRouter } from 'next/router'
import { useState } from 'react'

import PageDefault from '../components/PageDefault'
import Input from '../components/Input'
import Widget from '../components/Widget'

export default function Home() {
  const router = useRouter()
  let [name, setName] = useState('')

  return (
    <PageDefault 
      bg={db.bg}
      widget={
        <Widget
          headerTitle={db.title}
          description={db.description}
          onSubmit={function (e) {
            e.preventDefault()
            router.push(`/quiz?name=${name}`)
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
    />
  )
}