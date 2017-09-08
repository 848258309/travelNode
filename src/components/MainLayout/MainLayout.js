var $ = require('jquery');
import '../../index.less';
import { connect } from 'dva';
import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import styles from './MainLayout.less';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import { Col, Row, Icon, Menu, Dropdown } from 'antd';
import { getDeviceType } from '../../utils/utils';

// 包含默认头部的布局组件
class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      widthType: getDeviceType(), // 0:max, 1:mid, 2:min
      menuVisible: false,
    };
  }

  componentDidMount() {
    const { changeWidthType } = this;
    changeWidthType();
    window.addEventListener('resize', function(){
      changeWidthType();
    }, false);
  }

  changeWidthType = () => {
    const widthType = getDeviceType();
    if (this.props.widthType != widthType) {
      sessionStorage.setItem('DeviceType', widthType);
      this.props.dispatch({
        type: 'layout/changeWidthType',
        payload: {
          widthType: widthType
        }
      });
    }
  }

  showLeft = (e) => {
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
    const { widthType } = this.props.layout;

    const menu = (
      <Menu>
        <Menu.Item>
          <a rel="noopener noreferrer" href="logoutAction">退出</a>
        </Menu.Item>
      </Menu>
    );

    const HeaderLeftProps = {
      widthType,
      menu : [
        {path: 'adList',       icon: 'laptop',       name: '设备列表'},
        {path: 'deviceReward', icon: 'pay-circle-o', name: '设备红包'},
        {path: 'coupon',       icon: 'barcode',      name: '卡卷列表'},
        {path: 'strategyList', icon: 'layout',       name: '活动列表'},
        {path: 'onList',       icon: 'desktop',      name: '机器在线状态'},
        {path: 'revenue',      icon: 'area-chart',   name: '代运营营收统计'},
        {path: 'wechat',       icon: 'team',         name: '公众号列表'},
        {path: 'contract',     icon: 'solution',     name: '合同列表'},
        {path: 'rank',         icon: 'dot-chart',    name: '设备排名'},
        {path: 'warning',      icon: 'notification', name: '报警'},
      ],
    };

    const HeaderRightProps = {
      menu : [
        {path: 'home',       icon: 'home',       name: '首页',   index: 'li4'},
        {path: 'operator',   icon: 'layout',     name: '运营商', index: 'li4'},
        {path: 'settlement', icon: 'calculator', name: '结算',   index: 'li4'},
        {path: 'review',     icon: 'edit',       name: '审核',   index: 'li4'},
      ],
    };

    return (
      <div className={styles.normal}>
          <div ref="HeaderLeft" className={localStorage.getItem('pathType')==0? styles.HeaderLeft1:styles.HeaderLeft}  onClick={this.showLeft} >
            <div className={styles.admin}>
              <div className={styles.adminBtn}></div>
              <a href="logoutAction" className={styles.logout}>退出</a>
            </div>
            <div className={styles.HeaderLeftLogoB}></div>
            <div className={styles.HeaderLeftLogoS}></div>
            <HeaderLeft className={styles.HeaderLeftMenu} location={this.props.location} {...HeaderLeftProps} />
          </div>
          <div className={styles.HeaderLeftCov} ref="HeaderLeftCov" onClick={this.showLeft}></div>
          <div className={styles.HeaderRight} >
            <HeaderRight location={this.props.location} {...HeaderRightProps} />
            <Dropdown overlay={menu}>
              <div className={styles.admin1}>
                <div className={styles.adminBtn1}></div>
              </div>
            </Dropdown>
            <span className={styles.HeaderBar} onClick={this.showLeft}><Icon type="bars"/></span>
            <div className={styles.content}>
              <div className={styles.main}>{this.props.children}</div>
            </div>
          </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
};

function mapStateToProps({layout}) {
  return {layout};
}
export default connect(mapStateToProps)(MainLayout);
