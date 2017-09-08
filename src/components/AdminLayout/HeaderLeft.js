import React from 'react';
import { Menu, Icon, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import styles from './HeaderLeft.less';
// import '../../utils/uncommon.less';

function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
    /* eslint no-empty:0 */
  } catch (e) {}
  return key;
}

function HeaderLeft({ location, menu }) {

  function clickFunction(e) {
    const key = e.key;
    sessionStorage.setItem('pathName',key);
  }

  return (
    <Menu
      className={styles.main}
      selectedKeys={sessionStorage.getItem('pathName')? [sessionStorage.getItem('pathName').toString()]:['home']}
      onClick={clickFunction}
      mode="inline"
      theme="dark"
    >
      {
        menu.map(item => {
          return <Menu.Item key={item.path} className={styles.menu}>
            <Link to={item.path}><Icon type={item.icon} className={styles.leftIcon} /><span className={styles.leftSpan} >{item.name}</span></Link>
          </Menu.Item>;
        })
      }
    </Menu>
  );
}

export default HeaderLeft;
