/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit"

const users = [
  {id: "1", firstname: "Anna", lastname: "Persson", phone: "055 000 111 22"},
  {id: "2", firstname: "Harry", lastname: "Andersson", phone: "055 111 777 88"},
  {id: "3", firstname: "Ali", lastname: "Farrah", phone: "055 333 222 55"},
  {id: "4", firstname: "Zahra", lastname: "Hassan", phone: "055 777 666 22"}
]

const list = createSlice({
  name: "list",
  initialState: {
    users
  },
  reducers: {
    addUser: (store, action) => {
      store.users = [...store.users, action.payload]
    },
    removeUser: (store, action) => {
      const removed = store.users.filter(user => user.id !== action.payload)
      store.users = removed
    }
  }
  })

  export default list