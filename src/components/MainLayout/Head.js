import React, { Component } from 'react';
import { Tooltip, Input } from 'antd';
import { Link } from 'react-router-dom';
import styles from './Head.less';
const Search = Input.Search;
const imgObj = {
  logoImg: require('../../images/logo.png'),
  titleImg: require('../../images/title.jpg'),
}

const Head = function({

}){

  const titleItem = [
    {name: '首页',path: '/home'},
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
    <header className={styles.head}>
      <section className={styles.left}><img src={imgObj.logoImg}/></section>
      <section className={styles.right}>
        <div className={styles.input}>
          <Search
            style={{ width: 200, borderRadius: 10 }}
            size='large'
            onSearch={value => console.log(value)}
          />
        </div>
        <div className={styles.title}>
          {
            titleItem.map((x,i)=>(
              <div key={i} className={styles.item}>
                {x.tip?(
                  <Tooltip title={
                    <div className={styles.tipTitle}>
                      <div className={styles.tipLink}>
                        {x.tip.map(x1=><Link className={styles.link} key={x1.name} to={x1.path} >{x1.name}</Link>)}
                      </div>
                      <div className={styles.tipImg}>
                        <img src={imgObj.titleImg} />
                      </div>
                    </div>
                  }>
                    <span key={x.name} className={styles.text}>{x.name}</span>
                  </Tooltip>):
                <Link key={x.name} to={x.path} className={styles.text}>{x.name}</Link>}
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
  );
}

export default Head;
