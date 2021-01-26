import styled from 'styled-components'

const Button = styled.button`
  width: 280px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: #fff;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover{
    cursor: pointer;
  }
`

export default Button