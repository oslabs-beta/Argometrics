import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './src/components/App';

const root = createRoot(document.getElementById('root') as HTMLInputElement);

root.render(<App />);
