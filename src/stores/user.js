import { observable, action } from 'mobx';

class UserStore {
  @observable name = null;
  @observable file = [];

  constructor() {

  }

  @action setName = (name) => {
    this.name = name;
  }

}

const userStore = new UserStore();

export default userStore;
export { UserStore };
