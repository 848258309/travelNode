import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import styles from './HeaderRight.less';

function getMenuKeyFromUrl(pathname) {
  let key = '';
  try {
    key = pathname.match(/\/([^\/]*)/i)[1];
    /* eslint no-empty:0 */
  } catch (e) {}
  console.log(pathname);
  key = '/'+name+'/'+pathname;
  return key;
}

function HeaderRight({ location, menu }) {

  function clickFunction(e) {
    const key = e.key;
    sessionStorage.setItem('pathName',key);
    if (key === 'adManager/home') {
      localStorage.setItem('pathType', 0);
    }else if (key === 'home') {
      localStorage.setItem('pathType', 1);
    }
  }

  return (
    <div className={styles.normal}>
      <div className={styles.logo}>IM Admin</div>
      <Menu
        className={styles.menu}
        selectedKeys={sessionStorage.getItem('pathName')? [sessionStorage.getItem('pathName').toString()]:['home']}
        mode="horizontal"
        onClick={clickFunction}
        //theme="dark"
      >
        {
          menu.map(item => {
            return <Menu.Item key={item.path}  className={styles[item.index]} >
              <Link to={item.path}><Icon type={item.icon} className={styles.icon} />{item.name}</Link>
            </Menu.Item>;
          })
        }
        {/* <Menu.Item key="home">
          <Link to={`/${name}/home`}><Icon type="home" />首页</Link>
        </Menu.Item>
        <Menu.Item key="title0">
          <Link to={`/${name}/home0`}><Icon type="pay-circle-o" />充值</Link>
        </Menu.Item>
        <Menu.Item key="title1">
          <Link to={`/${name}/home1`}><Icon type="edit" />审核</Link>
        </Menu.Item>
        <Menu.Item key="title2">
          <Link to={`/${name}/adManager/home`}><Icon type="edit" />AD管理</Link>
        </Menu.Item> */}
      </Menu>
    </div>
  );
}

export default HeaderRight;
