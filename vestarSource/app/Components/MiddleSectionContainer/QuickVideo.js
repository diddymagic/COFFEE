import React from 'react'



class QuickVideo extends React.Component {

closePopUpWindow() {
  const vidPopUp = document.getElementById('vidPosition')
  if(vidPopUp.style.display = 'block') {
    vidPopUp.style.display = 'none'
    document.getElementById('vid').pause()
  }else {
    // fuck off !
  }
}

handleClick () {
  console.log('clicked')
  function getPositionAndDisplay (pos) {
    const position = document.getElementById(pos)
    position.style.top = window.pageYOffset + 'px'
    position.style.display = 'block'
    document.getElementById('vid').play()

  }
  getPositionAndDisplay('vidPosition')

}

handleWindowResizing () {
  window.addEventListener('resize', ()=> {
  // making the window popup responsive to resizing
  document.getElementById('vidPosition').style.top = window.pageYOffset + 'px'
  // so basically it calculates and adds the proper margin from the top of the window
})
}

  render () {
      this.handleWindowResizing()
    return (
      <div>
        <div id='vidPosition' className='modalBg'>
          <div id='vidWrapper'>
            <h1 title='Close Video' onClick={this.closePopUpWindow} className='icon icon-cross2'></h1>
            <video id='vid' src="vestarSource\app\videos\vid1.mp4" controls poster=""></video>
          </div>
        </div>

        <div className='quickVideoBg'>
          <h1>Expect The Best</h1>
        <p onClick={this.handleClick} title='Play Video' id='vidPlayer' className='icon-play2'></p>
        </div>
      </div>
    )
  }

}

export default QuickVideo
