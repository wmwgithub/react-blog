import React from 'react';
import ReactDOM from 'react-dom'
// import App from './App'
import BasicRoute from './router/router'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(<BasicRoute />,document.getElementById('root'))
serviceWorker.unregister()