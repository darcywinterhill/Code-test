/* eslint-disable */
import React from "react"
import styled from "styled-components/macro"
import { useDispatch, useSelector } from "react-redux"

import list from "../reducers/list"
import Heading from "./Heading"
import TableHeading from "./TableHeading"

const ListSection = () => {
  const userList = useSelector(store => store.list.users
    .slice()
    .sort((a, b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0)))

  const dispatch = useDispatch()

  return (
    <Main>
      <Heading text="LIST" />
      <UserSection>
        <HeadingSection>
          <TableHeading
            width="25%"
            text="FIRST NAME"
          />
          <TableHeading
            width="25%"
            text="LAST NAME"
          />
          <TableHeading
            width="50%"
            text="PHONE NUMBER"
          />
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
            <ButtonContainer>
            <DeleteButton
              type="button"
              onClick={() => dispatch(list.actions.removeUser(user.id))}>
              <Icon className="fas fa-times" />
            </DeleteButton>
            </ButtonContainer>
          </ContentSection>
        )}
      </UserSection>
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
const UserSection = styled.div`
  display: flex;
  flex-direction: column;
`
const HeadingSection = styled.div`
  display: flex;
  align-items: flex-end;
`
const ContentSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 11px;
    @media (min-width: 768px) {
      font-size: 11px;
    }
    @media (min-width: 1025px) {
      font-size: 12px;
    }
`
const TableContent = styled.div`
  display: flex;
  align-items: center;
  width: 25%;
  height: 25px;
  border-bottom: solid 1px #e2dfdf;
  padding: 5px;
  overflow-wrap: break-word;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
  height: 25px;
  padding: 5px;
  border-bottom: solid 1px #e2dfdf;
`
const DeleteButton = styled.button`
  background-color: #A42F47;
  color: white;
  margin: 5px;
  padding: 2px 5px;
  width: 20px;
  height: 20px;
  border: none;
  cursor: pointer;
    @media (min-width: 1025px) {
      width: 22px;
      height: 22px;
    }
`
const Icon = styled.i`
  margin: 0;
`