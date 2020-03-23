import React, {Component} from 'react'

class MenuButton extends Component {

  constructor() {
    super()

  }

  render () {
    return (
      <div className='menuButton'>
        <button>{this.props.buttonText}</button>
      </div>
    )
  }
}

export default MenuButton
