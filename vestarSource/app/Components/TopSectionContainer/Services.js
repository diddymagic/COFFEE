import React, {Component} from 'react'



class Services extends Component {

  render () {
    return (
      <div className='servicesContainer'>
        <div className='serviceContent'>
          <div className='serviceIconContainer'><span className='icon-cart'></span></div>
          <div><h4>EASY TO ORDER</h4></div>
          <div><p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>

        <div className='serviceContent'>
          <div className='serviceIconContainer'><span className='icon-cart'></span></div>
          <div><h4>QUALITY COFFEE</h4></div>
          <div><p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>

        <div className='serviceContent'>
          <div className='serviceIconContainer'><span className='icon-cart'></span></div>
          <div><h4>FAST DELIVERY</h4></div>
          <div><p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div>

      </div>
    )
  }
}

export default Services
