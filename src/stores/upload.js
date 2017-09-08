import { observable, action } from 'mobx';

class UploadStore {
  @observable name = null;
  @observable loading = false;
  @observable file = [];

  constructor() {

  }

  @action setName = (name) => {
    this.name = name;
  }

}

const upload = new UploadStore();

export default upload;
export { upload };
