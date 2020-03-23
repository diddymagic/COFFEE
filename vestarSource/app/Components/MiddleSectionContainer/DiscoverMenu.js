import React from 'react'
import MenuButton from '../MenuButton'
import Button from '../Button'


class DiscoverMenu extends React.Component {



  render () {
    return (
      <div className='dicoverMenuContainer'>
        <div className='discoverMenuHeader'>
          <h1><span className='icon icon-mail'></span><big>Discover</big> Our Exclusive Menu<span className='icon icon-mail'></span></h1>
        <p className='descriptionText'>Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the</p>
        </div>

        <div className='container discoverMenuItems'>

          <div className='discoverMenuContent'>
            <div className='discoverMenuImgcontainer'><div className='discoveMenuImg' style={{backgroundImage : `url(vestarSource/app/images/menu1.jpg)`}}></div></div>
          <h3>Cappuccino</h3>
            <p className='descriptionText'>Vokalia and Consonantia, there live the blind texts. Separated</p>
          <center className='priceText'><h3>$10.00</h3></center>
            <center>
              <MenuButton
                  buttonText = 'Add To Cart'
              />
            </center>
          </div>

          <div className='discoverMenuContent'>
            <div className='discoverMenuImgcontainer'><div className='discoveMenuImg' style={{backgroundImage : `url(vestarSource/app/images/menu2.jpg)`}}></div></div>
          <h3>Hot Chocolate</h3>
            <p className='descriptionText'>Vokalia and Consonantia, there live the blind texts. Separated</p>
          <center className='priceText'><h3>$10.00</h3></center>
            <center>
              <MenuButton
                  buttonText = 'Add To Cart'
              />
            </center>
          </div>

          <div className='discoverMenuContent'>
            <div className='discoverMenuImgcontainer'><div className='discoveMenuImg' style={{backgroundImage : `url(vestarSource/app/images/menu3.jpg)`}}></div></div>
          <h3>Iced Coffee</h3>
            <p className='descriptionText'>Vokalia and Consonantia, there live the blind texts. Separated</p>
          <center className='priceText'><h3>$10.00</h3></center>
            <center>
              <MenuButton
                  buttonText = 'Add To Cart'
              />
            </center>
          </div>

          <div className='discoverMenuContent'>
            <div className='discoverMenuImgcontainer'><div className='discoveMenuImg' style={{backgroundImage : `url(vestarSource/app/images/menu4.jpg)`}}></div></div>
          <h3>Cafe Latte</h3>
            <p className='descriptionText'>Vokalia and Consonantia, there live the blind texts. Separated</p>
          <center className='priceText'><h3>$10.00</h3></center>
            <center>
              <MenuButton
                  buttonText = 'Add To Cart'
              />
            </center>
          </div>

        </div>

      </div>
    )
  }
}

export default DiscoverMenu
