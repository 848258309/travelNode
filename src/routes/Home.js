import React, { Component } from 'react';
import { message} from 'antd';
import { Link } from 'react-router-dom';
import styles from './Home.less';
import Head from '../components/MainLayout/Head';
import Foot from '../components/MainLayout/Foot';
const imgObj = {
  headImg: require('../images/head.jpg'),
  content1Img: require('../images/content1.jpg'),
  content2Img: require('../images/content2.jpg'),
  content3Img: require('../images/content3.png'),
  con1Img: require('../images/con1.png'),
  con2Img: require('../images/con2.png'),
  con3Img: require('../images/con3.png'),
  mapImg: require('../images/map.png'),
}

class Home extends React.Component {
  constructor() {
    super(...arguments);
    document.title = "首页";
    this.prvNode = null;
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)

  }

  handleContentHover = (type,e)=>{
    console.log('handleContentHover',e);
    const eleNode = e.target;
    if(this.prvNode){
      this.prvNode.style.opacity = 0;
      this.prvNode = null;
    }
    if(eleNode.id=='cover'){
      this.prvNode = eleNode;
      if (type == 1) {
        eleNode.style.opacity = 1;
      } else {
        eleNode.style.opacity = 0;
      }
    }
  }

  render() {
    const { history } = this.props;

    const content1 = [
      {name: '岳家村'},
      {name: '高丘村'},
      {name: '浪彩村'},
      {name: '上塘村'},
      {name: '七岭脚村'},
      {name: '高垣村'},
    ];

    const content2 = [
      {name: '新安江', img: imgObj.con1Img},
      {name: '七里扬帆', img: imgObj.con2Img},
      {name: '江南悬空寺', img: imgObj.con3Img},
      {name: '灵栖洞', img: imgObj.con1Img},
    ];

    const content3 = [
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

    function handleEnter(e){
      console.log(...arguments);
    }

    return (
      <div className={styles.normal}>
        <section className={styles.head}>
          <Head />
          <div className={styles.input}>
            <div className={styles.left}>了解更多</div>
            <div className={styles.right}>
              <input onKeyUp={handleEnter} />
              <div onClick={e=>history.push('/village')} >搜&nbsp;索</div>
            </div>
          </div>
        </section>
        <article className={styles.main}>
          <section className={styles.content1}>
            <p className={styles.title}>乡村招商</p>
            <div className={styles.gallery}>
              {
                content1.map(x=><div key={x.name} className={styles.item}>
                  <img src={imgObj.content1Img} />
                  <Link
                    id='cover'
                    className={styles.cover}
                    to={`/village/${x.name}`}
                  >
                    <p className={styles.name} >{x.name}</p>
                    <p className={styles.link} >查看详情</p>
                  </Link>
                </div>)
              }
            </div>
            <Link className={styles.more} to={`/village`}>查看更多</Link>
          </section>
          <section className={styles.content2}>
            <p className={styles.title}>建德风情</p>
            <p className={styles.summary}>
              经历了5万多年古韵的历史之城，“山抱城，水绕城”的山水之城<br/>“森林拥抱城市，城市融入森林”的森林之城<br/>--浙江建德
            </p>
            <Link className={styles.link} to={`/village`}>查看更多</Link>
            <div className={styles.gallery}>
              {
                content2.map(x=><Link key={x.name} to={`/village`} className={styles.item}>
                  <img src={x.img}/>
                  <p>{x.name}</p>
                </Link>)
              }
            </div>
          </section>
          <section className={styles.content3}>
            <div className={styles.list}>
              <img src={imgObj.content3Img}/>
              <div className={styles.ul}>
                {
                  content3.map((x,i)=><Link key={x.name} className={i%2==1?styles.li2:styles.li} to={`/village`}>{x.name}</Link>)
                }
                <div className={styles.li3}></div>
                <div className={styles.li4}></div>
              </div>
            </div>
            <div className={styles.map}>
              <img src={imgObj.mapImg}/>
            </div>
          </section>
        </article>
        <Foot />
      </div>
    );
  }
}

export default Home;
