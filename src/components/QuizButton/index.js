import styled from 'styled-components'

const Button = styled.button`
  width: 280px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: #fff;
  font-size: ${props => props.fontSize ? 18 : 20};
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
  &:disabled {
    opacity: 0.1;
  
    &:hover{
      cursor: auto;
  }
  }
`
const PlayButton = ({disabled, text, fontSize}) => {
  return (
    <Button fontSize type='submit' disabled={disabled}>
      {text}
    </Button>
  )
}


export default PlayButton
