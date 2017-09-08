import {observable, computed, asStructure} from 'mobx';
// import $ from 'jquery';

class UiState {
  @observable language = "zh_CN";
  @observable pendingRequestCount = 0;
  @observable widthType = 0;

  // asStructure 确保 dimensions 对象进行深度比较而改变时，才会发送信号给observer
  // @observable windowDimensions = asStructure({
  //   width: $(window).width(),
  //   height: $(window).height(),
  //
  // });

  constructor() {
    this.widthType = this.getWidthType();
    // $(window).resize(() => {
    //   // this.windowDimensions = getWindowDimensions();
    // });
    window.addEventListener('resize',(e)=>{
      const newWidthType = this.getWidthType();
      if (this.widthType != newWidthType) {
        this.widthType = newWidthType
      }
    });
  }

  @computed get appIsInSync() {
    return this.pendingRequestCount === 0
  }

  getWidthType = () => {
    const width = window.innerWidth;
    let widthType = 0;   // >1000
    if(width<1000) widthType = 1;   // < 600- 1000
    if(width<600) widthType = 2;     // < 600
    return widthType;
  }
}

let singleton = new UiState();
export default singleton;
