import React from 'react';
import AppNavbar from './component/AppNavbar';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import LandingPage from './component/LandingPage';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppNavbar />
        <LandingPage />
      </div>
    </Provider>
  );
}

export default App;
