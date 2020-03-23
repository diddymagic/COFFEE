import React, {Component} from 'react'


class BookTable extends Component {

      constructor() {
        super()

        this.state = {
          value : ''
        }
      }

  render () {
    return (
      <div className='BookATableFormContainer'>

        <div className='reservationsHeader'>
          <div>
            <h1>Make A Reservation </h1>
          <p>
              Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life
            </p>
          </div>
        </div>

        <form className="tableFormGroup" action="#" method="post">
            <div>
                <div>
                  <label for="FullName">Full Name</label>
                <input required placeholder='Full Name' accessKey='N' type="text" name="FullName" value=""></input>
                </div>
                <div>
                  <label for="Email">Email</label>
                <input required placeholder='Email' accessKey='M' type="email" name="Email" value=""></input>
                </div>
                <div>
                  <label for="PhoneNumber">Phone Number</label>
                <input required placeholder='Phone Number' accessKey='P' type="tel" name="PhoneNumber" value=""></input>
                </div>
                <div>
                  <label for="Date">Date</label>
                <input required style={{padding : '12px'}} placeholder='somevalue' accessKey='D' type="date" name="Date" value=""></input>
                </div>
                <div>
                  <label for="Time">Time</label>
                  <select required accessKey='T' name="Time" >
    														<option value="#">6:30am</option>
    														<option value="#">7:00am</option>
    														<option value="#">7:30am</option>
    														<option value="#">8:00am</option>
    														<option value="#">8:30am</option>
    														<option value="#">9:00am</option>
    														<option value="#">9:30am</option>
    														<option value="#">10:00am</option>
    														<option value="#">10:30am</option>
    														<option value="#">11:00am</option>
    														<option value="#">11:30am</option>
    														<option value="#">12:00am</option>
    														<option value="#">12:30am</option>
    														<option value="#">1:00pm</option>
    														<option value="#">1:30pm</option>
    														<option value="#">2:00pm</option>
    														<option value="#">2:30pm</option>
    														<option value="#">3:00pm</option>
    														<option value="#">3:30pm</option>
    														<option value="#">4:00pm</option>
    														<option value="#">4:30pm</option>
    														<option value="#">5:00pm</option>
    														<option value="#">5:30pm</option>
    														<option value="#">6:00pm</option>
    														<option value="#">6:30pm</option>
    														<option value="#">7:00pm</option>
    														<option value="#">7:30pm</option>
    														<option value="#">8:00pm</option>
    														<option value="#">8:30pm</option>
    														<option value="#">9:00pm</option>
    													</select>
                </div>

                <div>
                  <label for="Person">Person</label>
                  <select required accessKey='P' name="Person">
                    <option value='#'>1</option>
                    <option value='#'>2</option>
                    <option value='#'>3</option>
                    <option value='#'>4</option>
                    <option value='#'>5</option>
                    <option value='#'>6</option>
                    <option value='#'>7</option>
                  </select>
                </div>
            </div>
                <center><button type='submit'>Book A Table</button></center>
        </form>

      </div>
    )
  }

}



export default BookTable
