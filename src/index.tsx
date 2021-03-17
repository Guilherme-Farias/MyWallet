import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transacion 1',
          amount: 400.00,
          type: 'deposit',
          category: 'food',
        },
        {
          id: 2,
          title: 'Transacion 2',
          amount: 400.00,
          type: 'withdraw',
          category: 'food',
        },
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

