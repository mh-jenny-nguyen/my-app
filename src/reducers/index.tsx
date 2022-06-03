// // reducers.js
// import { combineReducers } from 'redux'
// import { connectRouter } from 'connected-react-router'

// const createRootReducer = (history) => combineReducers({
//   router: connectRouter(history),
//   ... // rest of your reducers
// })
// export default createRootReducer

import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { History } from "history";
const createRootReducer = (history: History) => combineReducers({
  router: connectRouter(history),
})
export default createRootReducer

