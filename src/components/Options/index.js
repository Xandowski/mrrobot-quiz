import styled from 'styled-components'

const OptionsBase = styled.a`
  outline: 0;
  text-decoration: none;
  color: white;
  background-color: ${({ theme }) => `${theme.colors.primaryDark}`};
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
    background-color: ${({ theme }) => `${theme.colors.primaryLight}`};
  }
`

const Options = ({alternativeId, input, alternative, user, project, dataSelected, dataStatus, as}) =>{
  
  return(
    <OptionsBase
      as={as}
      htmlFor={alternativeId}
      data-selected={dataSelected}
      data-status={dataStatus}
    >
      {input}
      {alternative}
      {user && project && `${user}/${project}`}
    </OptionsBase>
  )
}

export default Options