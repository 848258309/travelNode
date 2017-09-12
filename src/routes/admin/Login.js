import React, { Component } from 'react';
import { message} from 'antd';
import history from 'history';
import styles from './Login.less';
import LoginForm from '../../components/Login/LoginForm';
//const [home1] = [require('../images/login.jpg')];

class Login extends React.Component {
  constructor() {
    super(...arguments);
    document.title = "登录";
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.user)
    if (nextProps.user.loading === false && nextProps.user.result != null) {
      const data = nextProps.user.result;
      if (data.result == 0) {
        localStorage.setItem('pathType', 1);
        sessionStorage.setItem('pathName', 'home');
        sessionStorage.setItem('serverType', data.serverType);
        browserHistory.push(`/${name}/home`);
      } else {
        message.error(data.msg);
      }
    }
  }

  render() {
    console.log(this.props);
    // const { loading } = this.props.user;
    const userLoginProps = {
      loading: false,
      onLogin(data) {

      },
    };

    return (
      <div className={styles.normal}>
        <div className={styles.form}>
          <center>
            <h2 className='title'>IMMER-管理员</h2>
          </center>
          <LoginForm {...userLoginProps} />
          <div className={styles.select}>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
