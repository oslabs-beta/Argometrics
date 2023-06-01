import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './src/components/App';
import { BrowserRouter  } from 'react-router-dom';
const root = createRoot(document.getElementById('root') as HTMLInputElement);

root.render(

  <BrowserRouter>
  <App />
  </BrowserRouter>
);
