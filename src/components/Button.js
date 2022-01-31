import React from 'react'
import styled from 'styled-components/macro'

const Button = ( {text} ) => {
  return (
    <MiscButton>
      {text}
    </MiscButton>
  )
}

export default Button

const MiscButton = styled.button`
  font-family: 'Lato', sans-serif;
`