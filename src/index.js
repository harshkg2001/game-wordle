import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import WordleProvider from './providers/WordleProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WordleProvider>
      <App />
    </WordleProvider>
  </React.StrictMode>
);