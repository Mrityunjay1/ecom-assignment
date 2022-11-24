import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";

import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  About,
  Products,
  PrivateRoute,
} from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" exact>
          <Products />
        </Route>
        <Route path="/checkout" exact>
          <Checkout />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/products/:id" children={<SingleProduct />} />
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
