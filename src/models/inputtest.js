// @flow

import { action, computed, observable } from 'mobx'

export class NumStore {
  @observable value = 0

  @computed get square () {
    return this.value * this.value
  }

  @action setValue (v: any) {
    this.value = v
  }

  @action reset () {
    console.log('resetting the store value')
    this.value = 0
  }
}

const numStore = new NumStore()
export default numStore
