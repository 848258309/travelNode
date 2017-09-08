import '../../index.less';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainLayout.less';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { Col, Row, Icon, Menu, Dropdown } from 'antd';
// var $ = require('jquery');

// 包含默认头部的布局组件
class MainLayout extends React.Component {

  showLeft(e) {
    const headLeft = this.refs.HeaderLeft;
    const headLeftCov = this.refs.HeaderLeftCov;
    if ($(headLeft).hasClass(styles.HeaderLeftShow)) {
      $(headLeft).removeClass(styles.HeaderLeftShow);
      $(headLeftCov).removeClass(styles.covShow);
    }else{
      $(headLeft).addClass(styles.HeaderLeftShow);
      $(headLeftCov).addClass(styles.covShow);
    }
  }
  render() {
    let HeaderLeftProps, HeaderRightProps, menu;

    menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer" href="#">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="#">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a rel="noopener noreferrer" href="logoutAction">退出</a>
        </Menu.Item>
      </Menu>
    );
    HeaderLeftProps = {
      menu : [
        {path: 'game',        icon: 'hdd',          name: '游戏管理'},
        {path: 'seller',      icon: 'user',         name: '商户管理'},
        {path: 'device',      icon: 'android-o',    name: '安卓设备'},
        {path: 'providerGame',icon: 'solution',     name: '提供商游戏'},
      ],
    };
    HeaderRightProps = {
      menu : [
        {path: 'home', icon: 'home',        name: '首页',index: 'li3'},
        {path: 'home0',icon: 'pay-circle-o',name: '充值',index: 'li3'},
        {path: 'home1',icon: 'edit',        name: '审核',index: 'li3'},
        //sessionStorage.getItem('serverType') == 2? '':{path: 'adManager/home',icon: 'desktop',     name: 'AD管理',index: 'li4'},
      ],
    };


    return (
      <div className={styles.normal}>
          <div ref="HeaderLeft" className={localStorage.getItem('pathType')==0? styles.HeaderLeft1:styles.HeaderLeft}  onClick={this.showLeft.bind(this)} >
            <div className={styles.admin}>
              <div className={styles.adminBtn}></div>
              <a href="logoutAction" className={styles.logout}>退出</a>
            </div>
            <div className={styles.HeaderLeftLogoB}></div>
            <div className={styles.HeaderLeftLogoS}></div>
            <HeaderLeft className={styles.HeaderLeftMenu} location={this.props.location} {...HeaderLeftProps} />
          </div>
          <div className={styles.HeaderLeftCov} ref="HeaderLeftCov" onClick={this.showLeft.bind(this)}></div>
          <div className={styles.HeaderRight} >
            <HeaderRight location={this.props.location} {...HeaderRightProps} />
            <Dropdown overlay={menu}>
              <div className={styles.admin1}>
                <div className={styles.adminBtn1}></div>
              </div>
            </Dropdown>
            <span className={styles.HeaderBar} onClick={this.showLeft.bind(this)}><Icon type="bars"/></span>
            <div className={styles.content}>
              <div className={styles.main}>{this.props.children}</div>
            </div>
          </div>
      </div>
    );
  }
}

// MainLayout.propTypes = {
//   children: PropTypes.element.isRequired,
//   location: PropTypes.object,
// };

export default MainLayout;
