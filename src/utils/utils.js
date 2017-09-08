exports.name = 'adManage';
exports.pathname = '/adManage';

export function getLocalTime(data) {
  var myDate = new Date(data * 1);
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  return year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day) + ' ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
}

export function getTimeStr() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  return year + (month < 10 ? '0' + month : month) + (day < 10 ? '0' + day : day) + hour + (minute < 10 ? '0' + minute : minute);
}

export function getTodayDate() {
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  return year + '-' +  (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
}

export function getNextDate() {
  var myDate = new Date();
  myDate.setDate(myDate.getDate() + 1);
  var year = myDate.getFullYear();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  return year + '-' +  (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
}

export function isOneMonth(month1,month2) {
  const str1 = Date.parse(new Date(month1))/100000;
  const str2 = Date.parse(new Date(month2))/100000;
  return str2-str1 <= 864*31;
}

export function getAdContractStatus(data) {
  switch (data*1) {
    case 0:
      return '未付款';
    case 1:
      return '执行中';
    case 2:
      return '未完成';
    case 2:
      return '已结束';
    default:
      return '未知';
  }
}

export function getWechatStatus(data) {
  switch (data*1) {
    case 0:
      return '尚未推广';
    case 1:
      return '推广中';
    case 2:
      return '推广结束';
    default:
      return '未知';
  }
}

export function getAdMachineStatus(data) {
  switch (data*1) {
    case 1:
      return '申请中';
    case 2:
      return '运营中';
    case 3:
      return '已拒绝';
    case 4:
      return '已停止';
    case 5:
      return '已暂停';
    default:
      return '未知';
  }
}

export function getGameStatus(data) {
  switch (data*1) {
    case 0:
      return '无效下架';
    case 1:
      return '正常上架';
    case 2:
      return '更新上架';
    case 3:
      return '删除';
    case 4:
      return '所有';
    case 5:
      return '正常下载';
    default:
      return '未知';
  }
}

export function getGameType(data,gameCategoryt,gameCategoryn) {
  if(data !== null && gameCategoryn.length !=0){
    for(let i=0;i<gameCategoryn.length;i++){
      if(data == gameCategoryt[i]){
        return gameCategoryn[i];
      }
    }
  }else{
    return null;
  }
}

export function getSmStatus(data) {
  switch (data*1) {
    case 0:
      return '已发送';
    case -1:
      return '未发送';
    default:
      return data;
  }
}

export function isNull(str) {
  if (str == "") return true;
  var regu = '^[ ]+$';
  var re = new RegExp(regu);
  return re.test(str);
}

export function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

export function isPC() {
	var userAgentInfo = navigator.userAgent;
	var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone","iPad", "iPod"];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
	  if (userAgentInfo.indexOf(Agents[v]) > 0) {
	    flag = false;
	    break;
	  }
	}
	return flag;
}

export const getDeviceType =  function getDeviceType() {
  const width = window.innerWidth;
  let widthType = 0;   // >1000
  if(width<1000) widthType = 1;   // < 600- 1000
  if(width<600) widthType = 2;     // < 600
  return widthType;
}

export function isWeChat() {
  var ua = navigator.userAgent.toLowerCase();
  var flag = false;
  if(ua.match(/MicroMessenger/i)=="micromessenger") {
    flag = true;
  }
  return flag;
}
