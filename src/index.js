import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

import * as serviceWorker from './serviceWorker';


/**
 * This string should be rendered twice on the DOM.
 * @type {string}
 */
const BLURB_TEXT = "I should be seen twice! :)";

ReactDOM.render(<App text={ BLURB_TEXT } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
