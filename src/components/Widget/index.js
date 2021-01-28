import styled from 'styled-components'
import PlayButton from '../QuizButton'

const WidgetBase = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  /* width: 35%; */
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-family: 'MrRobot';
    letter-spacing: 3px;
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
  img{
    width: 350px;
    height: 150px;
  }
`

WidgetBase.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`

WidgetBase.Content = styled.div`
  padding: 24px 28px 28px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`

WidgetBase.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;


  &:hover,
  &:focus {
    opacity: .5;
  }
`

const Widget = ({headerTitle, description, onSubmit, element, link, disabled, text, img, question, fontSize}) => {
  return (
    <WidgetBase>
      <WidgetBase.Header>
        <h1>{headerTitle}</h1>
      </WidgetBase.Header>
      {img &&
        <img src={img}/>
      }
      <WidgetBase.Content>
        {question &&
          <h2>{question}</h2>
        }
        <p>{description}</p>
        <form onSubmit={onSubmit}>
          {element}
          {text && 
            <PlayButton fontSize={fontSize} disabled={disabled} text={text}/>
          }
        </form>
        {link && (
          link
        )}
      </WidgetBase.Content>
    </WidgetBase>
  )
}

export default Widget
