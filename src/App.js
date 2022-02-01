/* eslint-disable */
import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter/*, Switch, Route*/ } from "react-router-dom"
import { combineReducers, configureStore } from "@reduxjs/toolkit"

import list from "reducers/list"

import ListPage from "pages/ListPage"

const reducer = combineReducers({
  list: list.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>

          {/*<Route path='/' exact component={ListPage}/>*/}
          <ListPage />

      </Provider>
    </BrowserRouter>
  )
}
