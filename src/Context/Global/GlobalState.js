import React, { useState } from 'react'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, quantity) => {
    setCart([...cart, {...product, quantity}])
  }

  const removeToCart = (id) => {
    const index = cart.findIndex((product) => product.id === id)
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const states = { cart }
  const requests = { addToCart, removeToCart }
  const setters = {}


  console.log(cart)
  return (
    <GlobalStateContext.Provider value={{states, requests, setters}}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState