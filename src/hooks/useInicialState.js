import React, { useState } from 'react'

const inicialState = {
    cart: [],
}
const useInicialState = () => {
  const [state, setState] = useState(inicialState);
  const AddToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  return {
    state,
    AddToCart,
  };
}

export default useInicialState