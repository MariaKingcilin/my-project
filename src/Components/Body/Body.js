import React from 'react'
import Carousal from '../Carousal'
import Bodyproducts from './Bodyproducts'
import Footer from '../Footer'
import Navbar from '../Navbar'

function Body() {
  return (
    <div>
        <Navbar />
        <Carousal />
        <Bodyproducts />
        {/* <Footer /> */}
    </div>
  )
}

export default Body