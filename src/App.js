import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import ExploreMealsDrinks from './pages/ExploreMealsDrinks';
import Provider from './context/Provider';
import RecipesDone from './pages/RecipesDone/RecipesDone';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/comidas" component={ Home } />
          <Route exact path="/bebidas" component={ Home } />
          <Route exact path="/explorar/comidas" component={ ExploreMealsDrinks } />
          <Route exact path="/explorar/comidas/ingredientes" component={ Explore } />
          <Route exact path="/explorar/bebidas" component={ ExploreMealsDrinks } />
          <Route exact path="/explorar/bebidas/ingredientes" component={ Explore } />
          <Route exact path="/explorar/comidas/area" component={ Explore } />
          <Route path="/receitas-feitas" component={ RecipesDone } />
          <Route path="/receitas-favoritas" component={ Explore } />
          <Route path="/explorar" component={ Explore } />
          <Route path="/perfil" component={ Profile } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
