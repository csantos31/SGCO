import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MiniDrawer from './components/MiniDrawer';

ReactDOM.render(<MiniDrawer/>, document.getElementById('root'));
registerServiceWorker();
