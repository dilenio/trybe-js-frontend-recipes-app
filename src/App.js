import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
