import React from 'react'
import styled from 'styled-components/macro'

import list from '../reducers/list'

const Form = () => {
  return (
    <FormContainer>
      <Label htmlFor="firstname" />
      <Input
        id="firstname"
        type="text"
        placeholder="First name"
      />
      <Label htmlFor="lastname" />
      <Input
        id="lastname"
        type="text"
        placeholder="Last name"
      />
      <Label htmlFor="phone" />
      <Input
        id="phone"
        type="text"
        placeholder="Phone number"
      />
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
  font-size: 14px;
  padding: 5px;
  margin: 5px 0 5px 0;
`