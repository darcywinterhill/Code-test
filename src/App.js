import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import ListPage from 'pages/ListPage'


export const App = () => {
  return (
    <ListPage />
    /*<BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path='/' exact component={ListPage}/>
        </Switch>
      </Provider>
    </BrowserRouter>*/
  )
}
