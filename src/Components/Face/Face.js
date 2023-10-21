import React from 'react'
import Faceproducts from './Faceproducts'
import Navbar from '../Navbar'
import Carousal from '../Carousal'
import Footer from '../Footer'

function Face() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Faceproducts />
      {/* <Footer /> */}
    </div>
  )
}

export default Face