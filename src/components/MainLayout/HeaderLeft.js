import React, { PropTypes } from 'react';
import { Menu, Icon, Tooltip } from 'antd';
import { Link } from 'dva/router';
import styles from './HeaderLeft.less';
import '../../utils/uncommon.less';
import { name } from '../../utils/utils';

const HeaderLeft = ({ location, menu, widthType }) => {

  function clickFunction(e) {
    const key = e.key;
    sessionStorage.setItem('pathName',key);
  }

  return (
    <Menu
      // className={styles.main}
      selectedKeys={sessionStorage.getItem('pathName')? [sessionStorage.getItem('pathName').toString()]:['home']}
      onClick={clickFunction}
      inlineCollapsed={widthType==1?true:false}
      mode="inline"
      theme="dark"
    >
      {
        menu.map(item => {
          return <Menu.Item key={item.path}>
            <Link to={`/${name}/${item.path}`}><Icon type={item.icon} /><span>{item.name}</span></Link>
          </Menu.Item>;
        })
      }
    </Menu>
  );
}

HeaderLeft.propTypes = {
  location: PropTypes.object,
};

export default HeaderLeft;
