import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Hair from './Hair/Hair'
import ProductDetails from './ProductDetails'
import ProductPayment from './ProductPayment'
import Face from './Face/Face'
import Body from './Body/Body'
import Baby from './Baby/Baby'

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/hair' element={<Hair />}></Route>
            <Route path='/face' element={<Face />}></Route>
            <Route path='/body' element={<Body />}></Route>
            <Route path='/baby' element={<Baby />}></Route>
            <Route path='/details' element={<ProductDetails />}></Route>
            <Route path='/payment' element={<ProductPayment />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router