import React, { Component } from 'react';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Head.less';
//const [home1] = [require('../images/login.jpg')];

const Head = function({

}){
  const title1 = (
    <div className={styles.tipTitle}>
      <Link className={styles.link} to='/village' >建德概况</Link>
      <Link className={styles.link} to='/village' >城市名片</Link>
      <Link className={styles.link} to='/village' >历史人文</Link>
      <Link className={styles.link} to='/village' >经济产业</Link>
      <Link className={styles.link} to='/village' >旅游资讯</Link>
    </div>
  )

  const title2 = (
    <div className={styles.tipTitle}>
      <Link className={styles.link} to='/village' >建德地图</Link>
      <Link className={styles.link} to='/village' >区位交通</Link>
      <Link className={styles.link} to='/village' >自然环境</Link>
      <Link className={styles.link} to='/village' >规划发展</Link>
    </div>
  )

  const title3 = (
    <div className={styles.tipTitle}>
      <Link className={styles.link} to='/village' >乡村全景</Link>
      <Link className={styles.link} to='/village' >乡村推介</Link>
      <Link className={styles.link} to='/village' >乡村</Link>
    </div>
  )

  const title4 = (
    <div className={styles.tipTitle}>
      <Link className={styles.link} to='/village' >新闻</Link>
      <Link className={styles.link} to='/village' >招商政策</Link>
    </div>
  )

  const title5 = (
    <div className={styles.tipTitle}>
      <Link className={styles.link} to='/village' >投资咨询</Link>
      <Link className={styles.link} to='/village' >投资指南</Link>
      <Link className={styles.link} to='/village' >投资意向</Link>
      <Link className={styles.link} to='/village' >资料下载</Link>
    </div>
  )

  const titleItem = [
    {name: '首页',},
    {name: '建德印象', tip: [
      {name: '建德概况', path: '/village'},
      {name: '城市名片', path: '/village'},
      {name: '历史人文', path: '/village'},
      {name: '经济产业', path: '/village'},
      {name: '旅游资讯', path: '/village'},
    ]},
    {name: '建德轮廓', tip: [
      {name: '建德地图', path: '/village'},
      {name: '区位交通', path: '/village'},
      {name: '自然环境', path: '/village'},
      {name: '规划发展', path: '/village'},
    ]},
    {name: '乡村招商', tip: [
      {name: '乡村全景', path: '/village'},
      {name: '乡村推介', path: '/village'},
      {name: '乡村',    path: '/village'},
    ]},
    {name: '掌上资讯', tip: [
      {name: '新闻',     path: '/village'},
      {name: '招商政策', path: '/village'},
    ]},
    {name: '投资服务', tip: [
      {name: '投资咨询', path: '/village'},
      {name: '投资指南', path: '/village'},
      {name: '投资意向', path: '/village'},
      {name: '资料下载', path: '/village'},
    ]},
  ];

  return (
    <div className={styles.normal}>
      <header className={styles.head}>
        <section className={styles.left}><img />IMG</section>
        <section className={styles.right}>
          <div className={styles.input}>
            Input
          </div>
          <div className={styles.title}>
            {
              titleItem.map(x=>(
                <div className={styles.item}>
                  {x.tip?(
                    <Tooltip title={
                      <div className={styles.tipTitle}>
                        {x.tip.map(x1=><Link className={styles.link} key={x1.name} to={x1.path} >{x1.name}</Link>)}
                      </div>
                    }>
                      <span key={x.name} className={styles.text}>{x.name}</span>
                    </Tooltip>):
                  <span key={x.name} className={styles.text}>{x.name}</span>}
                </div>
              ))
            }
            {/* <div className={styles.item}>首页</div>
            <div className={styles.item}>
              <Tooltip title={title1}>
                <span className={styles.text}>建德印象</span>
              </Tooltip>
            </div>
            <div className={styles.item}>
              <Tooltip title={title2}>
                <span className={styles.item}>建德轮廓</span>
              </Tooltip>
            </div>
            <div className={styles.item}>
              <Tooltip title={title3}>
                <span className={styles.item}>乡村招商</span>
              </Tooltip>
            </div>
            <div className={styles.item}>
              <Tooltip title={title4}>
                <span>掌上资讯</span>
              </Tooltip>
            </div>
            <div className={styles.item}>
              <Tooltip title={title5}>
                <span>投资服务</span>
              </Tooltip>
            </div> */}
          </div>
        </section>
      </header>
    </div>
  );
}

export default Head;
