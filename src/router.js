// import React, { PropTypes } from 'react';
import { useRouterHistory, browserHistory, hashHistory, Router, Route, IndexRoute, IndexRedirect } from 'react-router';
import { createHistory } from 'history';

import App from './routes/App';
import Upload from './routes/Upload';
import Test from './routes/test';
import Panorama from './routes/Panorama';

export default function() {
  // const history = useRouterHistory(createHistory)({
  //   basename: '/'
  // })
  return (
    <Router history={browserHistory}>
      <Route path={'/'} component={App}>
        {/* <IndexRoute component={Test} /> */}
        {/* <Route path={'login'} component={Login} /> */}
        <Route path={'upload'} component={Upload} />
        <Route path={'test'} component={Test} />
      </Route>
    </Router>
  );
}
