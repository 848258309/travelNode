import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Foot.less';
const imgObj = {
  footImg: require('../../images/footer.png'),
  mapImg: require('../../images/map.png'),
  backgroundImg: require('../../images/footerBac.png'),
}

const Foot = function({

}){

  const footer1 = [
    {name: '大慈岩脚'},
    {name: '方村'},
    {name: '李村村'},
    {name: '下田村'},
    {name: '丘塘里村'},
    {name: '外方村'},
    {name: '高垣村'},
    {name: '下桂村'},
    {name: '项塘坞村'},
    {name: '溪口村'},
    {name: '软堂乡'},
    {name: '高丘村'},
    {name: '岳家村'},
    {name: '浪彩村'},
    {name: '浪彩高丘'},
    {name: '上塘村'},
    {name: '七岭脚村'},
    {name: '下塘村'},
  ];

  return (
    <footer className={styles.normal}>
      <section className={styles.foot1}><img src={imgObj.footImg}/></section>
      <section className={styles.foot2}>
        <div className={styles.block}>
          <p className={styles.title}>特色景点</p>
          <div className={styles.ul}>
            {
              footer1.map((x,i)=><Link key={x.name} className={i%2==1?styles.li2:styles.li} to={`/village`}>{x.name}</Link>)
            }
          </div>
        </div>
        <div className={styles.block}>
          <p className={styles.title}>图游中国</p>
          <div className={styles.map}>
            <img src={imgObj.mapImg}/>
          </div>
        </div>
        <div className={styles.block}>
          <p className={styles.title}>联系我们</p>
          <p className={styles.phone}>江经理 : 159 9994 8888</p>
          <p className={styles.phone}>江经理 : 159 9994 8888</p>
          <p className={styles.phone}>江经理 : 159 9994 8888</p>
          <p className={styles.phone}>江经理 : 159 9994 8888</p>
          <p className={styles.phone}>江经理 : 159 9994 8888</p>
          <p className={styles.phone}>江经理 : 159 9994 8888</p>
        </div>
        <div className={styles.block}>
          <p className={styles.title}>手机预览</p>
          <div className={styles.qrcode}></div>
          <p className={styles.small}>扫码手机预览</p>
        </div>
      </section>
    </footer>
  );
}

export default Foot;
