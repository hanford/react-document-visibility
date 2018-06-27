import React, { PureComponent } from 'react'

export default class extends PureComponent {
  static defaultProps = {
    tag: 'div',
    onChange: () => {}
  }

  state = {
    visible: document.visibilityState === 'visible'
  }

  componentDidMount () {
    this.handleChange()

    document.addEventListener('visibilitychange', this.handleChange)
  }

  handleChange = () => {
    const nextState = { visible: document.visibilityState === 'visible' }

    this.props.onChange(nextState)
    this.setState(nextState)
  }

  render () {
    const { children, render, tag } = this.props

    const renderMethod = children || render

    if (typeof renderMethod === 'function') {
      return renderMethod(this.state)
    }

    return React.createElement(
      tag,
      { ...this.props, ...this.state },
      children,
    )
  }
}
