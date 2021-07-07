import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

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
        <div className="content-wrapper">
          <Route exact path="/" render={() => <AsideMenu />}/> 
          <Route exact path="/filtre/" render={() => <AsideMenu />}/> 
          <Content />
        </div>
      </Router>
      <Footer />
    </StoreProvider>
  )
}

export default App;