/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"

const Heading = ({ text }) => {

  return (
    <SectionHeading>
      {text}
    </SectionHeading>
  )
  
}

export default Heading

const SectionHeading = styled.h1`
  font-size: 16px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
    @media (min-width: 1025px) {
      font-size: 20px;
    }
`