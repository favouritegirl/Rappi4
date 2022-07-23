import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    setCart([...cart, {...product, quantity}])
  }
  const states = { cart }
  const requests = { addToCart }
  const setters = {}


  console.log(cart)
  return (
    <GlobalStateContext.Provider value={{states, requests, setters}}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState