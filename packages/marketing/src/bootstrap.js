import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (el) => {
  ReactDOM.render(<App />, el);
}

// Development
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  devRoot && mount(devRoot);
}

// Running through container
export { mount };
