import React, {Component} from 'react'
import History from './History'
import OurServices from './OurServices'
import DiscoverMenu from './DiscoverMenu'
import QuickVideo from './QuickVideo'
import StoreShowCase from './StoreShowCase'
import BookTable from './BookTable'
import Blogs from './Blogs'



class MiddleSectionRender extends Component {

  render () {
    return (
      <div>
        <History />
        <OurServices />
        <DiscoverMenu />
        <QuickVideo />
      <BookTable />
    <Blogs />
      {/* <StoreShowCase /> */}
      </div>
    )
  }
}

export default MiddleSectionRender
