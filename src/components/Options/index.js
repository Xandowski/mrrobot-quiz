import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'
import { motion } from 'framer-motion'

const OptionsBase = styled(Link)`
  outline: 0;
  text-decoration: none;
  color: white;
  /* background-color: ${({ theme }) => `${theme.colors.primary}`}; */
  background-color: ${props => props.back === true ? ({ theme }) => `${theme.colors.secondary}` : ({ theme }) => `${theme.colors.primary}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  width: 280px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: ${props => props.back === true ? 'flex' : 'block'};
  justify-content: center;

  input{
    display: none;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`
const QuestionsResults = styled(OptionsBase)`
  background-color: ${props => props.correct === true ? ({ theme }) => `${theme.colors.success}` : ({ theme }) => `${theme.colors.wrong}`};
`


const Options = ({
  as, alternative, alternativeId, dataSelected, dataStatus, input, project, user, href, button, delay, xValue, correct, isLabelResult, back
}) => (
  isLabelResult === true ?
    <QuestionsResults
      isLabelResult={isLabelResult}
      correct={correct}
      button={button}
      href={href}
      as={
        `${as}` === 'label' && motion.label
      }
      transition={{ delay: delay}}
      variants={{
        show: {opacity: 1, x: '0'},
        hidden: {opacity: 0, x: `${xValue}`},
      }}
      whileHover={{ opacity: 0.7 }}
      whileFocus={{ opacity: 0.7 }}
      initial="hidden"
      animate="show"
      data-selected={dataSelected}
      data-status={dataStatus}
      htmlFor={alternativeId}
    >
      {user && project && `${user}/${project}`}
      {input}
      {alternative}
  </QuestionsResults> 
  :
  <OptionsBase
    back={back}
    button={button}
    href={href}
    as={
      `${as}` === 'label'&& motion.label
    }
    transition={{ delay: delay}}
    data-selected={dataSelected}
    data-status={dataStatus}
    htmlFor={alternativeId}
  >
    {user && project && `${user}/${project}`}
    {input}
    {alternative}
  </OptionsBase>
)

// Options.propTypes = {
//   as: PropTypes.string,
//   alternative: PropTypes.elementType,
//   alternativeId: PropTypes.string,
//   dataSelected: PropTypes.bool,
//   dataStatus: PropTypes.bool,
//   input: PropTypes.element,
//   project: PropTypes.string,
//   user: PropTypes.string,
// }

// Options.defaultProps = {
//   as: '',
//   alternative: null,
//   alternativeId: '',
//   input: null,
//   dataSelected: null,
//   dataStatus: null,
//   project: '',
//   user: '',
// }

export default Options
