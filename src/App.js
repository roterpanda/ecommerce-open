import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function HatsPage() {
  return <h2>Hats</h2>;
}



function App() {
  return (
    <div>

      <Switch>
        <Route path='/' exact component={HomePage}>

        </Route>
        <Route path='/shop/hats' component={HatsPage}>

        </Route>
      </Switch>


    </div>
  );
}

export default App;
