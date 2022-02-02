/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"

const TableHeading = ({
  text,
  width
}) => {

  return (
    <SectionHeading width={width}>
      {text}
    </SectionHeading>
  )

}

export default TableHeading

const SectionHeading = styled.h2`
  width: ${props => props.width};
  font-size: 10px;
  padding: 5px 5px 5px 0;
  margin: 0;
    @media (min-width: 768px) {
      font-size: 11px;
    }
    @media (min-width: 1025px) {
      font-size: 14px;
    }
`