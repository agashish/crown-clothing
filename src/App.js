import React from 'react';
import HomePage from './pages/homepage.component';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';

import ShopPage from './pages/shop-page/shop-page.component';

const HatsPage = props => {
  return (
    <h1>Hats Page - {props.match.params.menuItem}</h1>
  )
}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />  
      </Switch>
    </div>
  );
}

export default App;
