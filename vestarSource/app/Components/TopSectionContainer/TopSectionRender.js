import React, {Component} from 'react'
import Navigation from './Navigation'
import IntroText from './IntroText'
import Services from './Services'
import QuickContact from './QuickContact'

class TopSectionRender extends Component {

  render () {

    return (
      <div>
        <div className="homeSectionContainer">
          <Navigation />
          <IntroText />
        </div>
        <Services />
        <QuickContact />
      </div>
    )
  }
}

export default TopSectionRender
