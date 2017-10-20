import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import  MyRouter  from './router/router.js'
import registerServiceWorker from './config/registerServiceWorker';

ReactDOM.render(<App>{MyRouter}</App>, document.getElementById('root'));
registerServiceWorker();
