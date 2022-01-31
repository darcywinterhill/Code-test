import React from 'react'
import styled from 'styled-components/macro'

const Heading = ({ text }) => {
  return (
    <SectionHeading>
      {text}
    </SectionHeading>
  )
}

export default Heading

const SectionHeading = styled.h1`
  font-size: 18px;
`