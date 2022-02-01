/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"
import { useDispatch, useSelector } from "react-redux"

import list from "../reducers/list"
import Heading from "./Heading"
import TableHeading from "./TableHeading"

const ListSection = () => {
  const userList = useSelector(store => store.list.users.slice().sort((a, b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0)))

  const dispatch = useDispatch()

  return (
    <Main>
    <Heading text="LIST" />
    <UserSection>
      <HeadingSection>
        <TableHeading text="FIRST NAME" />
        <TableHeading text="LAST NAME" />
        <TableHeading text="PHONE NUMBER" />
      </HeadingSection>
      {userList.map(user => 
        <ContentSection
          key={user.id}>
          <TableContent>
            {user.firstname}
          </TableContent>
          <TableContent>
            {user.lastname}
          </TableContent>
          <TableContent>
            {user.phone}
          </TableContent>
          <DeleteButton
            type="button"
            onClick={() => dispatch(list.actions.removeUser(user.id))}>
            <Icon className="fas fa-times" />
          </DeleteButton>
        </ContentSection>
      )}
    </UserSection>
    </Main>
  )
}

export default ListSection

const Main = styled.main`
  @media (min-width: 768px) {
    width: 50%;
  }
`
const UserSection = styled.div`
  display: flex;
  flex-direction: column;
`
const HeadingSection = styled.div`
  display: flex;
`
const ContentSection = styled.div`
  display: flex;
  font-size: 12px;
`
const TableContent = styled.div`
  width: 25%;
  border-bottom: solid 1px blue;
  padding: 5px;
`
const DeleteButton = styled.button`
  background-color: #A42F47;
  color: white;
  margin: 5px;
  padding: 2px 5px;
  border: none;
`
const Icon = styled.i`
  margin: 0;
`