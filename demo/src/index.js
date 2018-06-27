import React, {Component} from 'react'
import { render } from 'react-dom'

import Visbility from '../../src'

class Demo extends Component {
  render () {
    return (
      <Visbility>
        {({ visible }) => {
          console.log({ visible })

          return (
            <h1>react-document-visbility demo, check the console and focus / unfocus tab</h1>
          )
        }}
      </Visbility>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
