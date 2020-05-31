import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOutPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />

        <Route path='/shop' component={ShopPage} />

        <Route path='/signin' component={SignInAndSignOutPage} />

      </Switch>


    </div>
  );
}

export default App;
