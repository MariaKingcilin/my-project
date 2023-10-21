import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { stateContext } from '../Context/StateContext'
import Product from '../Product'

function Faceproducts() {
    const {state,dispatch} = useContext(stateContext);

    const [productSelect,setProductSelect] = useState('all');
    const [filSort,setFilSort] = useState(null);

    let handleSelect = (e) => {
        setProductSelect(e.target.name);
        let btnColor = document.querySelectorAll('.btn');
        btnColor.forEach((a) => {
            if(a.classList.contains('active-btn')) {
                a.classList.remove('active-btn')
            }
            e.currentTarget.classList.add('active-btn')
        })
    }

    useEffect(() => {
        let sort = state.allFaceProducts.sort((a,b) => {
            if(filSort === 'rating') {
                return b.rating.localeCompare(a.rating)
            }
            if(filSort === 'assend') {
                return a.price-b.price;
            }
            if(filSort === 'dessend') {
                return b.price-a.price;
            }
        })
        dispatch({type : 'addCart', payload : sort})
    },[filSort])

    let filterSort = (e) => {
        setFilSort(e.target.name);
    }

    let filterList = () => {
        let filList = document.querySelector('.filter-dropdown');
        filList.classList.toggle('filter-hide');
        filList.classList.toggle('filter-show');
    }
    
  return (
    <>
        <section id='our-product-sec'>
            <div className='container'>
                <div className='our-product-tittle'>
                    <div className='product-tittle'>
                        <h3>Our Products</h3>
                    </div>
                    <div className='product-filter'>
                        <div className='product-filter-icon' onClick={filterList}>
                            <h2>Sort By</h2>
                            <SyncAltIcon className='filter-icon' />
                        </div>
                        <div className='filter-dropdown filter-hide'>
                            <a name='rating' onClick={filterSort}>Rating</a>
                            <a name='dessend' onClick={filterSort}>Price - High to Low</a>
                            <a name='assend' onClick={filterSort}>Price - Low to High</a>
                        </div>
                    </div>
                </div>
                <div className='our-product-btn'>
                    <div className='product-filt'>
                        <Button className='btn active-btn' name='all' onClick={handleSelect} variant="outlined">ALL</Button>
                        <Button className='btn' name='face_wash' onClick={handleSelect} variant="outlined">FACE WASH</Button>
                        <Button className='btn' name='face_mask' onClick={handleSelect} variant="outlined">FACE MASK</Button>
                        <Button className='btn' name='face_scrub' onClick={handleSelect} variant="outlined">FACE SCRUB</Button>
                        <Button className='btn' name='face_cream' onClick={handleSelect} variant="outlined">FACE CREAM</Button>
                        <Button className='btn' name='face_serum' onClick={handleSelect} variant="outlined">FACE SERUM</Button>
                    </div>
                </div>
                <div className='our-product-card-row'>
                    {state.allFaceProducts.map((products,indexs) => {
                        if (productSelect === 'all' || products.type === productSelect) {
                            return (
                                <Product product={products} key={indexs} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    </>
  )
}

export default Faceproducts