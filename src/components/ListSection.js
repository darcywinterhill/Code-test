import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector, batch } from 'react-redux'

import list from '../reducers/list'
import Heading from './Heading'
import TableHeading from './TableHeading'

const ListSection = () => {
  const userList = useSelector(store => store.list.users)
  console.log(userList)


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
          </ContentSection>
          )}
    </UserSection>
    </Main>
  )
}

export default ListSection

const Main = styled.main`
  width: 50%;
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
`
const TableContent = styled.div`
  width: 33%;
  `