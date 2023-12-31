import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { stateContext } from '../Context/StateContext'
import Product from '../Product'

function Hairproducts() {
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
        let sort = state.allBabyProducts.sort((a,b) => {
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
        dispatch({type : 'babyCart', payload : sort})
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
                        <Button className='btn' name='shampoo' onClick={handleSelect} variant="outlined">SHAMPOO</Button>
                        <Button className='btn' name='lotion' onClick={handleSelect} variant="outlined">LOTION</Button>
                        <Button className='btn' name='oil' onClick={handleSelect} variant="outlined">OIL</Button>
                        <Button className='btn' name='powder' onClick={handleSelect} variant="outlined">POWDER</Button>
                        <Button className='btn' name='bath' onClick={handleSelect} variant="outlined">BATH</Button>
                    </div>
                </div>
                <div className='our-product-card-row'>
                    {state.allBabyProducts.map((products,indexs) => {
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

export default Hairproducts