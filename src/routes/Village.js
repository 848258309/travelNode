import React, { Component } from 'react';
import { message} from 'antd';
import { Link } from 'react-router-dom';
import styles from './Village.less';
import Head from '../components/MainLayout/Head';
import Foot from '../components/MainLayout/Foot';

const imgObj = {
  headImg: require('../images/village/yuejiacun/subHead.jpg'),
  introImg: require('../images/village/yuejiacun/intro.jpg'),
  VRImg: require('../images/village/yuejiacun/VR.jpg'),
  mapImg: require('../images/village/yuejiacun/map.png'),
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

    const subNav = [
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
    ]

    return (
      <div className={styles.normal}>
        <section className={styles.head}>
          <Head />
        </section>
        <article className={styles.articleContent}>
          <div className={styles.subNav}>
            {subNav.map( (x,i) => <Link to='/village' className={styles.subNavItem} key={i}>{x.name}</Link>)}
          </div>
          <div className={styles.villiageContent}>

            <article className={styles.contentItem}>
              <div className={styles.itemTitle}>
                建德·岳家山居
              </div>
              <div className={styles.itemIntro}>
                <div className={styles.itemIntroText}>
                  <h2>YUEJIASHANQIU </h2>
                  <h3>越过山丘 岳家等候</h3>
                  <p>岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在岳家在</p>
                </div>
                <img src={imgObj.introImg} className={styles.itemIntroImg}/>
              </div>
              <div className={styles.clearBoth}></div>
            </article>

            <article className={styles.contentItem}>
              <div className={styles.itemTitle}>
                建德·人文历史
              </div>
              <div className={styles.itemIntro}>
                <div className={styles.paragraph}>
                  <p>相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传相传</p>
                </div>
                <div className={styles.paragraph}>
                  <h3 className={styles.itemSubTitle}>溪竹拥村 静谧开阔</h3>
                  <p>白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝</p>
                </div>
                <div className={styles.paragraph}>
                  <h3 className={styles.itemSubTitle}>溪竹拥村 静谧开阔</h3>
                  <p>白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝</p>
                </div>
                <div className={styles.paragraph}>
                  <h3 className={styles.itemSubTitle}>溪竹拥村 静谧开阔</h3>
                  <p>白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝白云殿供奉的白山大帝</p>
                </div>
              </div>
            </article>

            <article className={styles.contentItem}>
              <div className={styles.itemTitle}>
                建德·发现美图
              </div>
              <div className={styles.vrImgs}>
                <Link to='vrImage' className={styles.imgLink}><img src={imgObj.VRImg} className={styles.vrImg} /></Link>
                <Link to='vrImage' className={styles.imgLink}><img src={imgObj.VRImg} className={styles.vrImg} /></Link>
                <Link to='vrImage' className={styles.imgLink}><img src={imgObj.VRImg} className={styles.vrImg} /></Link>
                <Link to='vrImage' className={styles.imgLink}><img src={imgObj.VRImg} className={styles.vrImg} /></Link>
                {/* <Link to='vrImage'><img src={imgObj.VRImg} className={styles.vrImg}/></Link>
                <Link to='vrImage'><img src={imgObj.VRImg} className={styles.vrImg}/></Link>
                <Link to='vrImage'><img src={imgObj.VRImg} className={styles.vrImg}/></Link> */}
                {/* <img src={imgObj.VRImg} className={styles.vrImg}/>
                <img src={imgObj.VRImg} className={styles.vrImg}/>
                <img src={imgObj.VRImg} className={styles.vrImg}/> */}
              </div>
            </article>

            <article className={styles.contentItem}>
              <div className={styles.itemTitle}>
                寻找·岳家山居
              </div>
              <div className={styles.itemIntro}>
                <img src={imgObj.mapImg} className={styles.itemMap}/>
              </div>
            </article>

            <article className={styles.contentItem}>
              <div className={styles.itemTitle}>
                岳家山居·细则
              </div>
              <div className={styles.itemIntro}>
                <p>总面积：790亩</p>
                <p>总面积：790亩</p>
                <p>总面积：790亩</p>
                <p>总面积：790亩</p>
                <p>总面积：790亩</p>
              </div>
            </article>

          </div>
        </article>
        <Foot />
      </div>
    );
  }
}

export default Village;
