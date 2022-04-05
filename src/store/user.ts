import { makeAutoObservable } from 'mobx';

class User {
  user = {
    email: '',
    name: '',
    imageUrl: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  getUser(value: any) {
    this.user = { ...value };
  }
}

export default new User();
