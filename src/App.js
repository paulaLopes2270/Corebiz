import React from 'react';
import Rotas from './routes'

import { GlobalStyle } from './css/GlobalStyle'

import { CartContextProvider } from "./context/cartContext/CartContext"

function App() {
  return (
    <>
      <CartContextProvider>
        <GlobalStyle />
        <Rotas />
      </CartContextProvider>
    </>
  );
}

export default App;
