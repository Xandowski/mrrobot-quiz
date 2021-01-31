import styled from 'styled-components'
import React from 'react'

import PlayButton from '../QuizButton'

const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  label {
    &:focus{
      opacity: 0.7;
    }
    color: ${({ theme }) => theme.colors.contrastText};
    &[data-selected="true"] {
      opacity: 0.7;

      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => `${theme.colors.success}`};
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => `${theme.colors.wrong}`};
      }
    }
  }
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