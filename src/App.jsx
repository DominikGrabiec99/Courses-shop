import React from "react";
import { HashRouter as Router } from "react-router-dom";

import StoreProvider from "./store/StoreProvider";
import Header from "./components/header/Header";
import Content from "./components/Content/Content";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Footer from "./components/Footer/Footer";

import './App.scss'

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Header />
        {/* <div className="content-wrapper">
          <AsideMenu />
          <Content />
        </div> */}
      </Router>
      {/* <Footer /> */}
    </StoreProvider>
  )
}

export default App;