/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"

import FormSection from "../components/FormSection"
import ListSection from "../components/ListSection"

const ListPage = () => {

  return (
    <Main>
      <FormSection />
      <ListSection />
    </Main>
  )
}

export default ListPage

const Main = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-family: Lato, sans-serif;
  color: #4D4A4A;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
    @media (min-width: 1025px) {
      padding: 20px 40px;
      flex-direction: row;
      justify-content: space-between;
    }
`