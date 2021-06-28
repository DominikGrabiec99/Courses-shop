import React from "react";

import StoreProvider from "./store/StoreProvider";
import Header from "./components/header/Header";

import './App.scss'

const App = () => {
  return (
    <StoreProvider>
      <Header />
    </StoreProvider>
  )
}

export default App;