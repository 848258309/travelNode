import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import AdminLayout from '../components/AdminLayout/MainLayout';
import Upload from './Upload';
import Login from './Login';

import Home from './Home';
import Village from './Village';
import Test from './test';

class App extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //   // context.router;
  // }


  render() {

    const adminRouter = (
      <AdminLayout>
        <Switch>
          <Route exact path='/admin/upload' component={Upload} />
        </Switch>
      </AdminLayout>
    );

    const loginRouter = (
      <Switch>
        <Route exact path='/admin/login' component={Login} />
      </Switch>
    );

    const userRouter = (
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/village' component={Village} />
        <Route exact path='/village/:id' component={Village} />
        <Route exact path='/test' component={Test} />
        <Redirect to='/home' />
      </Switch>
    );

    const pathName = location.pathname;
    let routerType = userRouter;
    if (pathName=='/admin/login') {
      routerType = loginRouter;
    } else if (pathName.includes('/admin/')) {
      routerType = adminRouter;
    }

    return (
      <div id='app' className='clearFix' >
        {routerType}
      </div>
    )
  };
}

export default App;
