import React, { Component } from 'react';
import { message} from 'antd';
import styles from './Login.less';
import Head from '../components/MainLayout/Head';
//const [home1] = [require('../images/login.jpg')];

class Home extends React.Component {
  constructor() {
    super(...arguments);
    document.title = "首页";
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)

  }

  render() {


    return (
      <div className={styles.normal}>
        <Head />
        <div></div>
        <footer></footer>
      </div>
    );
  }
}

export default Home;
