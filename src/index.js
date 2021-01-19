import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

 const rootEl = document.getElementById('root');

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>,rootEl)
if(module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default
        ReactDOM.render(<NextApp />, rootEl)
    })
}
