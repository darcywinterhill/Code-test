/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"

import Heading from "./Heading"

import List from "./List"

const ListSection = () => {

  return (
    <Main>
      <Heading text="LIST" />
      <List />
    </Main>
  )
  
}

export default ListSection

const Main = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    padding: 15px;
  }
`