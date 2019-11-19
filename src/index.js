import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Router from '~/router/routes';
import {store, persistor} from '~/store';

import '~/config/ReactotronConfig';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar barStyle="default" />
      <Router />
    </PersistGate>
  </Provider>
);

export default App;
