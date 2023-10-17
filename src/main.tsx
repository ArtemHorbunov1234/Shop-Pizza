import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
const rootElem = document.getElementById('root');

if (rootElem) {
    const root = ReactDOM.createRoot(rootElem);
    root.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </React.StrictMode>
    );
}
