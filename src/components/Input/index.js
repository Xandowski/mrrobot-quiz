import styled from 'styled-components'

const InputBase = styled.input`
  width: 280px;
  height: 40px;
  outline: none;
  font-size: 20px;
  margin: 28px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
`

const Input = ({ onChange, name, type, placeholder}) => {
  return (
    <InputBase
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  )
}

export default Input
