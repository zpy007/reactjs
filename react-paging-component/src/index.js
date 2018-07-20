import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pagecontainer from './container/Pagecontainer';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<Pagecontainer />, document.getElementById('root'));
registerServiceWorker();
