import React from 'react'
import Allproducts from './Allproducts'
import Navbar from '../Navbar'
import Carousal from '../Carousal'
import Footer from '../Footer'

function Home() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Allproducts />
      {/* <Footer /> */}
    </div>
  )
}

export default Home