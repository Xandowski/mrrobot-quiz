import styled from 'styled-components'

const OptionsBase = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
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

  a{
    color: white;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => `${theme.colors.primaryLight}`};
  }
`

const Options = ({alternativeId, input, alternative, links, dataSelected, dataStatus}) =>{
  
  return(
    <OptionsBase
      as="label"
      htmlFor={alternativeId}
      data-selected={dataSelected}
      data-status={dataStatus}
    >
      {input}
      {alternative}
      {<a href={links}>{links}</a>}
    </OptionsBase>
  )
}

export default Options