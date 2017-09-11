import 'es6-shim';
import './index.html';
import './index.less';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import * as stores from './stores/index';
import App from './routes/App';

render(
  <Provider { ...stores }>
    <BrowserRouter basename='/travelNode' >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
