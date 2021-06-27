import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from './components/app';
import BASE_URL from './config/constants';

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client = {client}>
  <App />
  </ApolloProvider>,
  document.getElementById('root')
);