import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Upload from './Upload';
import Test from './test';

@inject('uiState') @observer
class App extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  //   // context.router;
  // }

  render() {
    console.log('app render');
    return (
      <div id="app" className="clearFix" >
        <Switch>
          <Route exact path='/upload' component={Upload} />
          <Route exact path='/test' component={Test} />
          <Redirect to='/upload' />
        </Switch>
        {/* <div>width: {this.props.uiState.widthType}</div> */}
      </div>
    )
  };
}

// App.contextTypes = {
//    router: React.PropTypes.object.isRequired
// }
export default App;
