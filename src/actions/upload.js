import { getRequest } from '../utils/request';
import uploadStore from '../stores/upload';

export function addFile(payload) {
  // var data = new FormData(JSON.stringify( payload ));


  getRequest('operatorLogin',payload,(data)=>{
    uploadStore.setName(new Date().getTime());
  });

}
