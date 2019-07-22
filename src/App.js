import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import StoreBuilder from './store/StoreBuilder'
import { ShoppingCart, HomePage, Menu, Article, Checkout } from './components/index'
import { AppReducers } from './commons/appConfig/appReducers'
import * as AppEpics from './commons/appConfig/appEpics'
import { Loading } from './commons/components/index'

//register default reducers, epics

const StoreContainer = StoreBuilder.createStore().registerReducers([AppReducers]).registerEpics(AppEpics).createStoreProvider()

function App() {
  return (
    <div className="App">
      <StoreContainer>
        <BrowserRouter>
          <ShoppingCart />
          <Loading />
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
