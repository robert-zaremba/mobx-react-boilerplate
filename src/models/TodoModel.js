import { observable } from 'mobx'

export default class TodoModel {
  id = Math.random();
  @observable title;
  @observable finished = false;
  @observable content;

  constructor (title) {
    this.content = {title}
  }
}
