import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import StoreBuilder from './store/StoreBuilder'
import { Loading } from './commons/components/index'

const StoreContainer = StoreBuilder.createStore().createStoreProvider()

const HomePage = Loadable({
  loader: () => import('./components/homepage/index'),
  loading: Loading,
});

const Menu = Loadable({
  loader: () => import('./components/menu/index'),
  loading: Loading,
})

function App() {
  return (
    <div className="App">
      <StoreContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path='/menu' component={Menu} />
          </Switch>
        </BrowserRouter>
      </StoreContainer>
    </div>
  );
}

export default App;
