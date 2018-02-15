import React from 'react';
import ReactDOM from 'react-dom';
import BookStoreAdmin from './BookStoreAdmin';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<BookStoreAdmin />, document.getElementById('root'));
registerServiceWorker();
