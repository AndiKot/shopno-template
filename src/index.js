import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createUseStyles} from "react-jss";

const useStyles = createUseStyles({
    '@import': 'url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@400;700&family=Raleway&display=swap)',
    '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
    },
    body: {
        fontFamily: 'Montserrat, sans-serif',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
    },
});

// const classes = useStyles();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
