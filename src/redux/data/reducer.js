import { DELETE_CART_FAILURE, DELETE_CART_REQUIEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUIEST, GET_CART_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUIEST, GET_DATA_SUCCESS, POST_DATA_FAILURE, POST_DATA_REQUIEST, POST_DATA_SUCCESS } from "./action"





const initstate={
    iserror:false,
    isloading:false,
    data:[],
    cart:[]
}

export const dataReducer=(state=initstate,action)=>{
    switch(action.type){

        case GET_DATA_REQUIEST:
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case GET_DATA_SUCCESS:
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    data:action.payload
                })
                case GET_DATA_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })





                    case POST_DATA_REQUIEST:
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case POST_DATA_SUCCESS:
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    postCart:action.payload
                })
                case POST_DATA_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })


                    case GET_CART_REQUIEST:
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case GET_CART_SUCCESS:
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    getCart:action.payload
                })
                case GET_CART_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })


                    case DELETE_CART_REQUIEST:
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case DELETE_CART_SUCCESS:
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    data:action.payload
                })
                case DELETE_CART_FAILURE:
                    return({
                        ...state,
                        iserror:true,
                        isloading:false
                    })




                    default:
                        return({
                            ...state
                        })
    }
}
