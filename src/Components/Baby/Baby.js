import React from 'react'
import Babyproducts from './Babyproducts'
import Carousal from '../Carousal'
import Footer from '../Footer'
import Navbar from '../Navbar'

function Baby() {
  return (
    <div>
        <Navbar />
        <Carousal />
        <Babyproducts />
        {/* <Footer /> */}
    </div>
  )
}

export default Baby