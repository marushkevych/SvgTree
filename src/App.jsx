import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import SvgTree from './SvgTree';


const message = 'Welcome to SvgTree';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <SvgTree/>
  </div>
);

export default hot(module)(App);
