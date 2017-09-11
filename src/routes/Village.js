import React, { Component } from 'react';
import { message} from 'antd';
import { Link } from 'react-router-dom';
import styles from './Village.less';

const imgObj = {
  villageImg: require('../images/village.jpg'),
}

class Village extends React.Component {
  constructor() {
    super(...arguments);
    document.title = "乡村";
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)

  }

  render() {
    const { history } = this.props;

    return (
      <div className={styles.normal} onClick={e=>history.push('/home')}>
        <img src={imgObj.villageImg} />
      </div>
    );
  }
}

export default Village;
