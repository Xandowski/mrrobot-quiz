import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'

const OptionsBase = styled.a`
  outline: 0;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => `${theme.colors.primary}`};
  padding: 10px 15px;
  margin-bottom: 8px;
  width: 280px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;

  input{
    display: none;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`

const Options = ({
  as, alternative, alternativeId, dataSelected, dataStatus, input, project, user,
}) => (
  <OptionsBase
    as={as}
    data-selected={dataSelected}
    data-status={dataStatus}
    htmlFor={alternativeId}
  >
    {user && project && `${user}/${project}`}
    {input}
    {alternative}
  </OptionsBase>
)

Options.propTypes = {
  as: PropTypes.string,
  alternative: PropTypes.elementType,
  alternativeId: PropTypes.string,
  dataSelected: PropTypes.func,
  dataStatus: PropTypes.bool,
  input: PropTypes.element,
  project: PropTypes.string,
  user: PropTypes.string,
}

Options.defaultProps = {
  as: '',
  alternative: null,
  alternativeId: '',
  input: null,
  dataSelected: null,
  dataStatus: null,
  project: '',
  user: '',
}

export default Options
