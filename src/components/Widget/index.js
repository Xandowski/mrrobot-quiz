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
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  h1, h2, h3 {
    font-family: 'MrRobot';
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
  }
  
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
  h1, h2, h3 {
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
  }
  p, h2 {
    padding: 0 7px;
  }
  p{
    width: 100%;
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

    label {
      &[data-selected="true"] {
        background-color: ${({ theme }) => `${theme.colors.primaryLight}`};

        &[data-status="SUCCESS"] {
          background-color: ${({ theme }) => `${theme.colors.success}`};
        }

        &[data-status="ERROR"] {
          background-color: ${({ theme }) => `${theme.colors.error}`};
        }
      }
    }
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

const Widget = ({headerTitle, description, onSubmit, element, link, disabled, text, img, question}) => {
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
        <div>{description}</div>
        <form onSubmit={onSubmit}>
          {element}
          {text && 
            <PlayButton disabled={disabled} text={text}/>
          }
        </form>
        {link && (
          <a href={link}>Voltar para home</a>
        )}
      </WidgetBase.Content>
    </WidgetBase>
  )
}

export default Widget
