import React from 'react';
import ReactDOM from 'react-dom/client';
import Loader from './components/overall/loader';


const App = React.lazy(()=>import('./App'))

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <React.Suspense fallback={<div><Loader /></div>}>
      <App />
      </React.Suspense>
  </React.StrictMode>
)
