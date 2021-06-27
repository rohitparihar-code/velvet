import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import App from './components/app';

const client = new ApolloClient({
  uri: "https://velvet-gql.as.r.appspot.com/",
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client = {client}>
  <App />
  </ApolloProvider>,
  document.getElementById('root')
);