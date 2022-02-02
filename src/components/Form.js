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
      <Label
        htmlFor="firstname"
        aria-label="first name input"
        title="first name input">
      <Input
        id="firstname"
        type="text"
        placeholder="First name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      </Label>
      <Label
        htmlFor="lastname"
        aria-label="last name input"
        title="last name input">
      <Input
        id="lastname"
        type="text"
        placeholder="Last name"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      </Label>
      <Label
        htmlFor="phone"
        aria-label="phone number input"
        title="phone number input">
      <Input
        id="phone"
        type="text"
        placeholder="Phone number"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      </Label>
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
  padding: 5px;
  margin: 5px 0;
  border: solid 1px #e2dfdf;
`
const Input = styled.input`
  font-size: 12px;
  font-family: 'Lato', sans-serif;
  border: none;
    @media (min-width: 768px) {
      font-size: 13px;
    }
    @media (min-width: 1025px) {
      font-size: 16px;
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
  cursor: pointer;
    @media (min-width: 1025px) {
      font-size: 16px;
    }
`