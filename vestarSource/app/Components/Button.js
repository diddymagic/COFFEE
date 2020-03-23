import React, {Component} from 'react'

class Button extends Component {

  constructor() {
    super()

  }

  render () {
    return (
      <div className='button'>
        <button>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default Button
