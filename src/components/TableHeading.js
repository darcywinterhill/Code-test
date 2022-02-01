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
  font-size: 12px;
  padding: 5px;
`