import React from 'react'
import db from '../../db.json'
import { useState } from 'react'

import { useRouter } from 'next/router'

import PageDefault from '../components/PageDefault'
import Widget from '../components/Widget'



const Result = () => {
  const router = useRouter()
  const {query: {points, name}} = router
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  // if(points === 50) {
  //   setDescription(`Parabéns ${name}, você acertou todas`)
  //   setImage('/public/images/mrrobot.jpg')
  // } else if (points === 40) {
  //   setDescription(`Foi quase ${name}, você errou apenas uma questão`)
  //   setImage('/public/images/mrrobot.jpg')
  // } else if (points === 30) {
  //   setDescription(`Continue tentando ${name}, você errou duas questões`)
  //   setImage('/public/images/mrrobot.jpg')
  // } else if (points === 20) {
  //   setDescription(`Mais sorte ${name}, você acertou duas questões`)
  //   setImage('/public/images/mrrobot.jpg')
  // } else if (points === 10){
  //   setDescription(`Você foi mal ${name}, você acertou apenas uma`)
  //   setImage('/public/images/mrrobot.jpg')
  // } else {
  //   setDescription(`Que azar ${name}, você não acertou nenhuma`)
  //   setImage('/public/images/mrrobot.jpg')
  // }

  return (
    <PageDefault
      widget={
        <Widget
          headerTitle='Resultado'
          question={`Você fez ${points} pontos`}
          description={description}
          onSubmit={function (e) {
            e.preventDefault()
            router.push(`/quiz?name=${name}`)
          }}
          element={
            <h1>Ranking</h1>
          }
          text='Adicionar ao meu projeto'
          link='/'
        />
      }
    />
  )
}


export default Result