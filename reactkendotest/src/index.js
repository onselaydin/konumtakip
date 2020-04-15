import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ProductProvider} from './context';

ReactDOM.render(
<ProductProvider>
<App />
</ProductProvider>


, document.getElementById('root'));

serviceWorker.unregister();
