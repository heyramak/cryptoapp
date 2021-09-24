import React,{ useEffect} from "react";
import { HashRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";



const App = () => {

    function ScrollToTop() {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      }

  return (
    <div className="app">
        <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                  <ScrollToTop />
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
              <ScrollToTop />
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
              <ScrollToTop />
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
              <ScrollToTop />
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
              <ScrollToTop />
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2021
            <Link to="/">Cryptoverse Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Typography.Text level={4}style={{ color: "white", textAlign: "center" }}> || </Typography.Text>
            <Link to="/exchanges">Exchanges</Link>
            <Typography.Text level={4}style={{ color: "white", textAlign: "center" }}> || </Typography.Text>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
      </Router>
    </div>
  );
};

export default App ;
