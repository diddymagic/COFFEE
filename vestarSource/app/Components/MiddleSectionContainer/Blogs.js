import React from 'react'




class Blogs extends React.Component {

  constructor() {
    super ()
  }



render () {
  return (

    <div className='blogContainer'>

      <div className='blogEntryHeader'>
        <h1>Blogs From Recent</h1>
        <p className='descriptionText'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      </div>

<div className='blogContentContainer'>
      <div>
        <div style={{backgroundImage : `url('vestarSource/app/images/menu2.jpg')`}} className='blogBg'></div>
          <h2><a title='Read More' href='#'>The Dangers Of Cappuccino</a></h2>
        <div className='blogDetails'>
          <small><span className='icon icon-instagram2'></span>Sept 10, 2020</small>
          <small><span className='icon icon-instagram2'></span>Author : Emmanuel Oriola</small>
        </div>
        <div>
          <p className='descriptionText'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>

      <div>
        <div style={{backgroundImage : `url('vestarSource/app/images/menu1.jpg')`}} className='blogBg'></div>
          <h2><a title='Read More' href='#'>The Dangers Of Cappuccino</a></h2>
        <div className='blogDetails'>
          <small><span className='icon icon-instagram2'></span>Sept 10, 2020</small>
          <small><span className='icon icon-instagram2'></span>Author : Emmanuel Oriola</small>
        </div>
        <div>
          <p className='descriptionText'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>

      <div>
        <div style={{backgroundImage : `url('vestarSource/app/images/menu4.jpg')`}} className='blogBg'></div>
          <h2><a title='Read More' href='#'>The Dangers Of Cappuccino</a></h2>
        <div className='blogDetails'>
          <small><span className='icon icon-instagram2'></span>Sept 10, 2020</small>
          <small><span className='icon icon-instagram2'></span>Author : Emmanuel Oriola</small>
        </div>
        <div>
          <p className='descriptionText'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>

</div>

    </div>
  )
}


}

export default Blogs
