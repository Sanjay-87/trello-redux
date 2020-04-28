import React from 'react';
import './App.css';
import Boards from './components/Boards';
import Board from './components/Board';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Boards} />
        <Route path="/boards/:boardId/:boardName" component={Board} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
