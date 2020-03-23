import React, {Component} from 'react'
import Button from '../Button'

const introTexts = ['one thing', 'two thing']

class IntroText extends Component {

    constructor() {
      super()

      this.state = {
        intro : 'Amazing Taste And Beautiful Place'
      }

    }

  render () {
    return (
      <div className='introTextContainer'>
        <div className='introContent'>
          <div><h1 id='greeting'>Hey There !</h1></div>
            <div><h1 className='intoHeader'>{this.state.intro}</h1></div>
            <div>
              <p className='introTextDescription'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className='buttonContainer'>
              <div>
                <Button
                buttonText = 'Order Now'
                />
              </div>
              <div>
                <Button
                buttonText = 'View Menu'
                />
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default IntroText
