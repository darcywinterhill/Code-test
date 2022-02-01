/* eslint-disable */
import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import list from "reducers/list"

import ListPage from "pages/ListPage"

const reducer = combineReducers({
  list: list.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  )
}
