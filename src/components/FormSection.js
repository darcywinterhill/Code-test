/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"

import Heading from "components/Heading"
import Form from "components/Form"


const FormSection = () => {
  return (
    <Main>
      <Heading text="CREATE NEW" />
      <Form />
    </Main>
  )
}

export default FormSection

const Main = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding: 15px;
  }
`