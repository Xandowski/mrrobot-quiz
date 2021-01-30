import styled from 'styled-components'
import React from 'react'

import PlayButton from '../QuizButton'

const FormBase = styled.form`

`

const Form = ({onSubmit, text, disabled, children}) => {
  return (
    <FormBase
      onSubmit={onSubmit}
    >
      { children }
      { text && <PlayButton disabled={disabled} text={text} /> }
    </FormBase>
  )
}

export default Form