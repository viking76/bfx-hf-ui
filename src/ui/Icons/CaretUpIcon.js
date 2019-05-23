import React from 'react'

export default class CaretUpIcon extends React.PureComponent {
  render() {
    const { x, y } = this.props

    return (
      <path
        {...this.props}

        d='M15.76 12.37l.01-.01-5-6-.01.01C10.57 6.15 10.31 6 10 6s-.57.15-.76.37l-.01-.01-5 6 .01.01c-.14.17-.24.39-.24.63 0 .55.45 1 1 1h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63z'
        transform={`translate(${x}, ${y})`}
        fillRule='evenodd'
      />
    )
  }
}
