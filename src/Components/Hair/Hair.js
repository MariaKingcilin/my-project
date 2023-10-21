import React from 'react'
import Hairproducts from './Hairproducts'
import Navbar from '../Navbar'
import Carousal from '../Carousal'
import Footer from '../Footer'

function Hair() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Hairproducts />
      {/* <Footer /> */}
    </div>
  )
}

export default Hair