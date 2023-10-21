import React, { useContext, useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import '../Hair/Hairproducts.scss'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import { stateContext } from '../Context/StateContext'
import Product from '../Product'

function Allproducts() {
    const {state,dispatch} = useContext(stateContext);

    const [productSelect,setProductSelect] = useState('all');
    const [filSort,setFilSort] = useState(null);
    // const [filtered,setFiltered] = useState(state.allProducts);

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
        let sort = state.allProducts.sort((a,b) => {
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

    useEffect(() => {
        handleSearchFilter();
    },[state.searchQry]);

    const handleSearchFilter = () => {
        let temp = state.allProducts.filter((prod) => {
            return prod.details.toLowerCase().includes(state.searchQry);
        });
        // setFiltered(temp);
        dispatch({type : 'allProduct', payload : temp});
    }

  return (
    <>
        <section id='our-product-sec'>
            <div className='container'>
                <div className='our-product-tittle'>
                    <div className='product-tittle'>
                        <h3>All Products</h3>
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
                        <Button className='btn' name='Hair' onClick={handleSelect} variant="outlined">HAIR</Button>
                        <Button className='btn' name='Face' onClick={handleSelect} variant="outlined">FACE</Button>
                        <Button className='btn' name='Body' onClick={handleSelect} variant="outlined">BODY</Button>
                        <Button className='btn' name='Baby' onClick={handleSelect} variant="outlined">BABY</Button>
                    </div>
                </div>
                <div className='our-product-card-row'>
                    {state.allProducts.map((products,indexs) => {
                        if (productSelect === 'all' || products.idName === productSelect) {
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

export default Allproducts