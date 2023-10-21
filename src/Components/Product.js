import React, { useContext } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { stateContext } from './Context/StateContext'
import './Product.scss'
import { useNavigate } from 'react-router-dom'

function Product({product}) {
    const navigate = useNavigate();
console.log(product)
    const {state,dispatch} = useContext(stateContext);

    const handleAddCart = () => {
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

    const handleAddValue = () => {
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
                        dispatch({type : 'alertDenger', payload : true});

                        setTimeout(() => {
                            dispatch({type : 'alertDenger', payload : false});
                        },3000);
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
                        dispatch({type : 'alertDenger', payload : true});

                        setTimeout(() => {
                            dispatch({type : 'alertDenger', payload : false});
                        },3000);
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
                        dispatch({type : 'alertDenger', payload : true});

                        setTimeout(() => {
                            dispatch({type : 'alertDenger', payload : false});
                        },3000);
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
                        dispatch({type : 'alertDenger', payload : true});

                        setTimeout(() => {
                            dispatch({type : 'alertDenger', payload : false});
                        },3000);
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
                    dispatch({type : 'alertDenger', payload : true});

                    setTimeout(() => {
                        dispatch({type : 'alertDenger', payload : false});
                    },3000);
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

    const handleRemoveValue = () => {
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

    const handleProduct = () => {
        navigate(`/details?idNo=${product.idNo}`);
    }

  return (
    <>
        <div className='our-product-card-col'>
            <div className='best-seller-card'>
                <img src={product.image} alt='loading' onClick={() => handleProduct()} />
                <div className='best-seller-content'>
                    <div className='tittle'>
                        <h3>{product.details}</h3>
                    </div>
                    <div className='subtittle'>
                        <p>{product.benifits}</p>
                    </div>
                    <div className='rating'>
                        <span><span className='star-icon'>★</span>{product.rating} </span><span>|</span><VerifiedIcon className='verify-icon' /><span> {product.review} Reviews</span>
                    </div>
                    <div className='price'>
                        <h3>₹ {product.price}</h3>
                    </div>
                </div>
                <button className='addcart-content' onClick={() => {handleAddCart()}}>
                    <span>ADD TO CART</span>
                </button>
                {product.isAddCart ? <></> : <button className='addcart-value addcart-hide'>
                    <RemoveIcon onClick={() => {handleRemoveValue()}} />
                    <span>{product.count}</span>
                    <AddIcon className='add-icon' onClick={() => {handleAddValue()}} />
                </button>}
            </div>
        </div>
    </>
  )
}

export default Product