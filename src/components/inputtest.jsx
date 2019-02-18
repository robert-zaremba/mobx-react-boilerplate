import React from 'react'
import { observer } from 'mobx-react'
import numStore from '../models/inputtest'


@observer
export class ExternalStore extends React.Component {
  // props = {store: inputtest store}

  handleClick = (e) => {
    let v = parseInt(e.target.value)
    numStore.setValue(v)
  }

  render() {
    return [
      "Provide an integer number: ",
      <input onChange={ this.handleClick } value={ numStore.value } />
    ]
  }
}


@observer
export class ExternalStoreOutput extends React.Component {
  render() {
    return (
      <React.Fragment >
        Square of {numStore.value} = {numStore.square}
        <button onClick={ () => numStore.reset() } >Reset</button>
      </React.Fragment>
    )
  }
}
