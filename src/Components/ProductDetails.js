import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { stateContext } from './Context/StateContext';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import VerifiedIcon from '@mui/icons-material/Verified'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Navbar from './Navbar'
import './ProductDetails.scss'

function ProductDetails() {
    const {state,dispatch} = useContext(stateContext);

    const [searchParam] = useSearchParams();
    const param = searchParam.get('idNo');

    const [productDetails,setProductDetails] = useState([]);

    useEffect(() => {
        setProductDetails(state.allProducts.filter((a) => {
            return a.idNo === parseInt(param);
        }));
    },[state.allAddCart]);

    const handleAddCart = (product) => {
        if(product.idName === 'Hair') {
            const addCart = state.allHairProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    return {
                        ...prod,
                        isAddCart : false,
                        remove : 0
                    }
                } else return {...prod}
            });
            dispatch({type : 'addCart', payload : addCart});

        } else if(product.idName === 'Face') {
            const addCart = state.allFaceProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    return {
                        ...prod,
                        isAddCart : false,
                        remove : 0
                    }
                } else return {...prod}
            });
            dispatch({type : 'faceCart', payload : addCart});

        } else if(product.idName === 'Body') {
            const addCart = state.allBodyProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    return {
                        ...prod,
                        isAddCart : false,
                        remove : 0
                    }
                } else return {...prod}
            });
            dispatch({type : 'bodyCart', payload : addCart});

        } else if(product.idName === 'Baby') {
            const addCart = state.allBabyProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    return {
                        ...prod,
                        isAddCart : false,
                        remove : 0
                    }
                } else return {...prod}
            });
            dispatch({type : 'babyCart', payload : addCart});
        }

        const allProduct = state.allProducts.map((prod) => {
            if(prod.idNo === product.idNo) {
                return {
                    ...prod,
                    isAddCart : false,
                    remove : 0
                }
            } else return {...prod}
        });
        dispatch({type : 'allProduct', payload : allProduct});
        
        const isExist = state.allAddCart.some((prod) => prod.idNo === product.idNo);

        if(isExist) {
            dispatch({type : 'valueAdd', payload : [...state.allAddCart]});
        } else {
            dispatch({type : 'valueAdd', payload : [...state.allAddCart, {...product, isAddCart : false, remove : 0}]});
        }

        dispatch({type : 'alertAdd', payload : true});

        setTimeout(() => {
            dispatch({type : 'alertAdd', payload : false});
        },3000);
    }

    const handleAddValue = (product) => {
        if(product.idName === 'Hair') {
            const addCart = state.allHairProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count < 14) {
                        return {
                            ...prod,
                            count : prod.count += 1,
                            remove : prod.remove += 1
                        }
                    } else {
                        return {...prod}
                    }
                } else return {...prod}
            });
            dispatch({type : 'addCart', payload : addCart});

        } else if(product.idName === 'Face') {
            const addCart = state.allFaceProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count < 14) {
                        return {
                            ...prod,
                            count : prod.count += 1,
                            remove : prod.remove += 1
                        }
                    } else {
                        return {...prod}
                    }
                } else return {...prod}
            });
            dispatch({type : 'faceCart', payload : addCart});

        } else if(product.idName === 'Body') {
            const addCart = state.allBodyProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count < 14) {
                        return {
                            ...prod,
                            count : prod.count += 1,
                            remove : prod.remove += 1
                        }
                    } else {
                        return {...prod}
                    }
                } else return {...prod}
            });
            dispatch({type : 'bodyCart', payload : addCart});

        } else if(product.idName === 'Baby') {
            const addCart = state.allBabyProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count < 14) {
                        return {
                            ...prod,
                            count : prod.count += 1,
                            remove : prod.remove += 1
                        }
                    } else {
                        return {...prod}
                    }
                } else return {...prod}
            });
            dispatch({type : 'babyCart', payload : addCart});
        }

        const allProduct = state.allProducts.map((prod) => {
            if(prod.idNo === product.idNo) {
                if(prod.count < 14) {
                    return {
                        ...prod,
                        count : prod.count += 1,
                        remove : prod.remove += 1
                    }
                } else {
                    return {...prod}
                }
            } else return {...prod}
        });
        dispatch({type : 'allProduct', payload : allProduct});

        const isExists = state.allAddCart.some((prod) => prod.idNo === product.idNo);

        if(isExists) {
            const addValue = state.allAddCart.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count < 14) {
                        return {
                            ...prod,
                            count : prod.count += 1,
                            remove : prod.remove += 1
                        }
                    } else {
                        return {...prod}
                    }
                } else return {...prod}
            });
            dispatch({type : 'valueAdd', payload : addValue});
        } else {
            dispatch({type : 'valueAdd', payload : [...state.allAddCart]});
        }
    }

    const handleRemoveValue = (product) => {
        if(product.idName === 'Hair') {
            const addCart = state.allHairProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count > 1) {
                        return {
                            ...prod,
                            count : prod.count -= 1,
                            remove : prod.remove -= 1
                        }
                    } else {
                        return {
                            ...prod,
                            isAddCart : true,
                            remove : prod.remove -= 1
                        }
                    }
                } else return {...prod}
            });
            dispatch({type : 'addCart', payload : addCart});

        } else if(product.idName === 'Face') {
            const addCart = state.allFaceProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count > 1) {
                        return {
                            ...prod,
                            count : prod.count -= 1,
                            remove : prod.remove -= 1
                        }
                    } else {
                        return {
                            ...prod,
                            isAddCart : true,
                            remove : prod.remove -= 1
                        }
                    }
                } else return {...prod}
            });
            dispatch({type : 'faceCart', payload : addCart});

        } else if(product.idName === 'Body') {
            const addCart = state.allBodyProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count > 1) {
                        return {
                            ...prod,
                            count : prod.count -= 1,
                            remove : prod.remove -= 1
                        }
                    } else {
                        return {
                            ...prod,
                            isAddCart : true,
                            remove : prod.remove -= 1
                        }
                    }
                } else return {...prod}
            });
            dispatch({type : 'bodyCart', payload : addCart});

        } else if(product.idName === 'Baby') {
            const addCart = state.allBabyProducts.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count > 1) {
                        return {
                            ...prod,
                            count : prod.count -= 1,
                            remove : prod.remove -= 1
                        }
                    } else {
                        return {
                            ...prod,
                            isAddCart : true,
                            remove : prod.remove -= 1
                        }
                    }
                } else return {...prod}
            });
            dispatch({type : 'babyCart', payload : addCart});
        }

        const allProduct = state.allProducts.map((prod) => {
            if(prod.idNo === product.idNo) {
                if(prod.count > 1) {
                    return {
                        ...prod,
                        count : prod.count -= 1,
                        remove : prod.remove -= 1
                    }
                } else {
                    return {
                        ...prod,
                        isAddCart : true,
                        remove : prod.remove -= 1
                    }
                }
            } else return {...prod}
        });
        dispatch({type : 'allProduct', payload : allProduct});

        const isExists = state.allAddCart.some((prod) => prod.idNo === product.idNo);

        if(isExists) {
            const removeValue = state.allAddCart.map((prod) => {
                if(prod.idNo === product.idNo) {
                    if(prod.count > 1) {
                        return {
                            ...prod,
                            count : prod.count -= 1,
                            remove : prod.remove -= 1
                        }
                    } else {
                        return {
                            ...prod,
                            isAddCart : true,
                            remove : prod.remove -= 1
                        }
                    }
                } else return {...prod}
            });
            dispatch({type : 'valueAdd', payload : removeValue});
        } else {
            dispatch({type : 'valueAdd', payload : [...state.allAddCart]});
        }

        if(product.remove === -1) {
            const removeValue = state.allAddCart.filter((prod) => prod.idNo !== product.idNo);
            dispatch({type : 'valueAdd', payload : removeValue});
            dispatch({type : 'alertRemove', payload : true});

            setTimeout(() => {
                dispatch({type : 'alertRemove', payload : false});
            },3000);
        }
    }
    
  return (
    <>
        <Navbar />
        <section id='product-details-sec'>
            <div className='container'>
                {productDetails.map((a,b) => {
                    return (
                        <>
                            <div className='product-details-row' key={b}>
                                <div className='product-details-img-col'>
                                    <div className='product-details-img'>
                                        <img src={a.image} alt='loading' />
                                    </div>
                                </div>
                                <div className='product-details-content-col'>
                                    <div className='product-details-content'>
                                        <div className='product-navigation'>
                                            <ul>
                                                <li className='color'>Home<NavigateNextIcon /></li>
                                                <li className='color'>{a.idName}<NavigateNextIcon /></li>
                                                <li>{a.details}</li>
                                            </ul>
                                        </div>
                                        <div className='product-details'>
                                            <h3>{a.details}</h3>
                                            <p>{a.benifits}</p>
                                            <div className='ratings'>
                                                <span><span className='star-icon'>★</span>{a.rating} </span><span>|</span><VerifiedIcon className='verify-icon' /><span> {a.review} Verified Ratings</span>
                                            </div>
                                            <div className='price'>
                                                <h3>₹{a.price}.00</h3>
                                                <i>Incl.of all taxes</i>
                                            </div>
                                            <div className='handling-img'>
                                                <img src='https://mamaearth.in/_next/image?url=https%3A%2F%2Fimages.mamaearth.in%2Fwysiwyg%2Fgoodness-icons.png&w=1920&q=75' alt='loading' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='product-price-sec'>
                                <div className='product-price-card'>
                                    <h3>Special Price</h3>
                                    <div className='product-offer'>
                                        <span>₹{a.price}.00</span>
                                    </div>
                                    <i>Inclusive of all Taxes</i>
                                    <div className='ratings'>
                                        <span><span className='star-icon'>★</span>{a.rating} </span><span>|</span><VerifiedIcon className='verify-icon' /><span> {a.review} Verified Ratings</span>
                                    </div>
                                    <div className='product-qty'>
                                        <span>Quantity : {a.count}</span>
                                    </div>
                                    {a.isAddCart ? <div className='cart-btn' onClick={() => {handleAddCart(a)}}>
                                        <h4>ADD TO CART</h4>
                                    </div> :
                                    <div className='qty'>
                                        <RemoveIcon onClick={() => {handleRemoveValue(a)}} />
                                        <span>{a.count}</span>
                                        <AddIcon className='add-icon' onClick={() => {handleAddValue(a)}} />
                                    </div>}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    </>
  )
}

export default ProductDetails