import Products from '../Allproducts.json'

export const initialState = {
    allHairProducts : Products.HairProducts,
    allFaceProducts : Products.FaceProducts,
    allBodyProducts : Products.BodyProducts,
    allBabyProducts : Products.BabyProducts,
    allProducts : [...Products.HairProducts,...Products.FaceProducts,...Products.BodyProducts,...Products.BabyProducts],
    allAddCart : [],
    orderAmount : 0,
    offerAmount : 0,
    totalAmount : 0,
    saveAmount : 0,
    searchQry : '',
    alertAdd : false,
    alertRemove : false,
    alertDenger : false,
}

export const setReducer = (state,action) => {
    switch(action.type) {
        case 'allProduct' :
            return {
                ...state,
                allProducts : action.payload
            }
        case 'addCart' :
            return {
                ...state,
                allHairProducts : action.payload
            }
        case 'faceCart' :
            return {
                ...state,
                allFaceProducts : action.payload
            }
        case 'bodyCart' :
            return {
                ...state,
                allBodyProducts : action.payload
            }
        case 'babyCart' :
            return {
                ...state,
                allBabyProducts : action.payload
            }
        case 'valueAdd' :
            return {
                ...state,
                allAddCart : action.payload
            }
        case 'order' :
            return {
                ...state,
                orderAmount : action.payload
            }
        case 'offer' :
            return {
                ...state,
                offerAmount : action.payload
            }
        case 'total' :
            return {
                ...state,
                totalAmount : action.payload
            }
        case 'save' :
            return {
                ...state,
                saveAmount : action.payload
            }
        case 'search' :
            return {
                ...state,
                searchQry : action.payload
            }
        case 'alertAdd' :
            return {
                ...state,
                alertAdd : action.payload
            }
        case 'alertRemove' :
            return {
                ...state,
                alertRemove : action.payload
            }
        case 'alertDenger' :
            return {
                ...state,
                alertDenger : action.payload
            }
        default :
        return state
    }
}