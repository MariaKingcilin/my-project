import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import './Cartproduct.scss'
import { stateContext } from './Context/StateContext'

function Cartproduct({product}) {
    const {state,dispatch} = useContext(stateContext);

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

  return (
    <div className='addcart-product-col'>
        <div className='addcart-product-card'>
            <div className='product-img-col'>
                <div className='product-img-card'>
                    <img src={product.image} alt='loading' />
                </div>
            </div>
            <div className='product-content-col'>
                <div className='product-content-card'>
                    <h4>{product.details}</h4>
                    <h5>₹{product.price*product.count}</h5>
                    <div className='product-count-card'>
                        <RemoveIcon className='icon' onClick={() => {handleRemoveValue()}} />
                        <span>{product.count}</span>
                        <AddIcon className='icon' onClick={() => {handleAddValue()}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cartproduct