import styled from 'styled-components'
import React from 'react'
import { motion } from 'framer-motion'


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
  align-items: center;
  justify-content: flex-start;
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
  h1, h2 {
    font-size: 20px;
    font-weight: normal;
    line-height: 1;
    margin-bottom: 0;
  }
  h3 {
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
  }
  p, h2, h3 {
    padding: 0 7px;
  }
  p{
    width: 100%;
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

const Widget = ({
  delay, headerTitle, description, img, question, backLink, yValue, children
}) => {
  return (
    <WidgetBase
      as={motion.section}
      transition={{ delay: delay, duration: 0.5}}
      variants={{
        show: {opacity: 1, y: '0'},
        hidden: {opacity: 0, y: `${yValue}`},
      }}
      initial="hidden"
      animate="show"
    >
      <WidgetBase.Header>
        { backLink }
        <h1>{ headerTitle }</h1>
      </WidgetBase.Header>
        { img && <img src={img} alt="gif" /> }
      <WidgetBase.Content>
        { question && <h2>{question}</h2> }
        <h3>{description}</h3>
      { children }
      </WidgetBase.Content>
    </WidgetBase>
  )
}

export default Widget
