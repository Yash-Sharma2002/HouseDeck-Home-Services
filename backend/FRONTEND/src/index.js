import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './components/overall/loader';

const App = React.lazy(()=>import('./App'))
ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div><Loader /></div>}>
      <App />
      </React.Suspense>
  </React.StrictMode>,
  document.getElementById('app')
);

