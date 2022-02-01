/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"

const TableHeading = ({ text }) => {
  return (
    <SectionHeading>
      {text}
    </SectionHeading>
  )
}

export default TableHeading

const SectionHeading = styled.h2`
  width: 25%;
  font-size: 10px;
  padding: 5px;
  margin: 0;
    @media (min-width: 768px) {
      font-size: 11px;
    }
    @media (min-width: 1025px) {
      font-size: 12px;
    }
`