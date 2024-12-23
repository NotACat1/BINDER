import React from 'react';
import { createRoot } from 'react-dom/client';

import App from '@components/App';

import '@styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
