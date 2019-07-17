import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StoreBuilder from './store/StoreBuilder'
import { ShoppingCart, HomePage, Menu, Article, Checkout } from './components/index'

const StoreContainer = StoreBuilder.createStore().createStoreProvider()

function App() {
  return (
    <div className="App">
      <StoreContainer>
        <BrowserRouter>
          <ShoppingCart />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path='/menu' component={Menu} />
            <Route exact path='/article' component={Article} />
            <Route exact path='/checkout' component={Checkout} />
          </Switch>
        </BrowserRouter>
      </StoreContainer>
    </div>
  );
}

export default App;
