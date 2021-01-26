import styled from 'styled-components'

const Form = styled.form`
  input {
    width: 280px;
    height: 40px;
    outline: none;
    font-size: 20px;
    margin: 28px 0;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`

export default Form