import React, {Component} from 'react'


class QuickContact extends Component {

  render () {
    return (
      <div className='quickContactContainer'>
        <div>
            <h3><span className='icon icon-phone'></span><a href='tel:+234-703-068-0817'>+234-703-068-0817</a></h3>
            <p>cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div>
            <h3><span className='icon icon-location2'></span><a href='#'>Geo Location</a></h3>
            <p>No 26, Ojuolobun Close, Off Bishop Oluwole, Ojuolobun, Lagos, Nigeria.</p>
        </div>

        <div>
            <h3><span className='icon icon-mail'></span><a href='mailto:Vestarbvcl@gmail.com'>Email Address</a></h3>
            <p>Vestarbvcl@gmail.com</p>
        </div>

        <div>
            <h3><span className='icon icon-clock3'></span>Open Everyday</h3>
            <p>Monday - Friday : 6:00 AM - 10:00 PM , Saturdays : 7:00 AM - 9:00 PM , Sundays : 8:00 AM - 8:00 PM</p>
        </div>
      </div>
    )
  }
}



export default QuickContact
