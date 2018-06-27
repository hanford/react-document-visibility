import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import Visbility from 'src/'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('gets true value when visible', () => {
    render(<Visbility>
      {({ visible }) => (
        <h1>{`Document is visible: ${visible}`}</h1>
      )}</Visbility>, node, () => {
      expect(node.innerHTML).toContain('Document is visible: true')
    })
  })
})
