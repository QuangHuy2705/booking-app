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

function App() {
  return (
    <div className="App">
      <StoreContainer>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </BrowserRouter>
      </StoreContainer>
    </div>
  );
}

export default App;
