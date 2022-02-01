/* eslint-disable */
import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components/macro"

import list from "../reducers/list"

const Form = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()

    const newUser = {
      id: uuidv4(),
      firstname: firstName,
      lastname: lastName,
      phone: phone
    };
      dispatch(list.actions.addUser(newUser))
      setFirstName("")
      setLastName("")
      setPhone("")
  }

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <Label htmlFor="firstname" />
      <Input
        id="firstname"
        type="text"
        placeholder="First name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Label htmlFor="lastname" />
      <Input
        id="lastname"
        type="text"
        placeholder="Last name"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Label htmlFor="phone" />
      <Input
        id="phone"
        type="text"
        placeholder="Phone number"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <SubmitButton type="submit">
        ADD NEW
      </SubmitButton>
    </FormContainer>
  )
}

export default Form

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
const Label = styled.label`
`
const Input = styled.input`
  font-family: 'Lato', sans-serif;
  font-size: 12px;
  padding: 5px;
  margin: 5px 0;
  border: solid 1px #e2dfdf;
  @media (min-width: 768px) {
    font-size: 13px;
  }
`
const SubmitButton = styled.button`
  font-family:'Lato', sans-serif;
  font-weight: 700;
  background-color: #77DBDC;
  color: white;
  text-align: center;
  width: 120px;
  height: 35px;
  margin: 15px 0;
  border: none;
`