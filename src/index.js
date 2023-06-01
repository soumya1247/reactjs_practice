import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import store from './components/Redux/Counter/Store'
import { TodoListApi } from './components/Redux/Counter/rtkTodoList'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api = {TodoListApi}>
      <App />
      </ApiProvider>
    </Provider>
  // </React.StrictMode>
);
    