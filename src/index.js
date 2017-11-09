import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './people.json';
import App from './App';

//import registerServiceWorker from './registerServiceWorker';

const names = require( './people.json' );

ReactDOM.render( <App names={names.people} />, document.getElementById( 'root' ) );
//registerServiceWorker();
