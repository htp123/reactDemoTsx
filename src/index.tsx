import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
// require('!style-loader!css-loader!./index.css')
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Hello from './compts/hello';

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement  
/*  <Hello name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement  */
);
registerServiceWorker();