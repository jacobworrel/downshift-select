import React, {Component} from 'react'
import {render} from 'react-dom'

import SingleSelect from '../../src/SingleSelect'

class Demo extends Component {
  render() {
    return <div>
      <h1>downshift-select Demo</h1>
      <SingleSelect/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
