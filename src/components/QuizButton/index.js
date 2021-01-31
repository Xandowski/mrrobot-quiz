import styled from 'styled-components'

const Button = styled.button`
  width: 280px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  color: #fff;
  font-family: 'MrRobot';
  font-weight: normal;
  font-size: ${props => props.fontSize ? 18 : 20};
  letter-spacing: 2px;
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: ${props => props.as === 'a' ? 'flex' : 'block'};
  justify-content: center;
  align-items: center;

  &:hover{
    cursor: pointer;
    opacity: 0.7;
  }
  &:disabled {
    opacity: 0.1;
  
    &:hover{
      cursor: auto;
    }
  }
`
const PlayButton = ({disabled, text, as, href}) => {
  return (
    <Button
      as={as}
      href={href}
      type='submit' 
      disabled={disabled}
    >
      {text}
    </Button>
  )
}


export default PlayButton
