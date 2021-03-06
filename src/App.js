import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <h2>login</h2>            
          </Route>
          <Route path="/">
            <Header />
            <Home />        
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
