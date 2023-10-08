import axios from "axios"




export const GET_DATA_REQUIEST="GET_DATA_REQUIEST"
export const GET_DATA_SUCCESS="GET_DATA_SUCCESS"
export const GET_DATA_FAILURE="GET_DATA_FAILURE"


export const POST_DATA_REQUIEST="POST_DATA_REQUIEST"
export const POST_DATA_SUCCESS="POST_DATA_SUCCESS"
export const POST_DATA_FAILURE="POST_DATA_FAILURE"


export const GET_CART_REQUIEST="GET_CART_REQUIEST"
export const GET_CART_SUCCESS="GET_CART_SUCCESS"
export const GET_CART_FAILURE="GET_CART_FAILURE"


export const DELETE_CART_REQUIEST="DELETE_CART_REQUIEST"
export const DELETE_CART_SUCCESS="DELETE_CART_SUCCESS"
export const DELETE_CART_FAILURE="DELETE_CART_FAILURE"





const getDataRequiest=()=>{
    return({
        type:
        GET_DATA_REQUIEST
    })
}
const getDataSuccess=(data)=>{
    return({
        type:GET_DATA_SUCCESS,
        payload : data
    })
}
const getDataFailure=()=>{
    return({
        type: GET_DATA_FAILURE
    })
}


const postDataRequiest=()=>{
    return({
        type:
        POST_DATA_REQUIEST
    })
}
const postDataSuccess=(data)=>{
    return({
        type:POST_DATA_SUCCESS,
        payload : data
    })
}
const postDataFailure=()=>{
    return({
        type: POST_DATA_FAILURE
    })
}


const getCartRequiest=()=>{
    return({
        type:
        GET_CART_REQUIEST
    })
}
const getCartSuccess=(data)=>{
    return({
        type:GET_CART_SUCCESS,
        payload : data
    })
}
const getCartFailure=()=>{
    return({
        type: GET_CART_FAILURE
    })
}


const deleteCartRequiest=()=>{
    return({
        type:
        DELETE_CART_REQUIEST
    })
}
const deleteCartSuccess=(data)=>{
    return({
        type:DELETE_CART_SUCCESS,
        payload : data
    })
}
const deleteCartFailure=()=>{
    return({
        type: DELETE_CART_FAILURE
    })
}










export const getData=()=>(dispatch)=>{
     dispatch(getDataRequiest())
     return axios({
        url : "http://localhost:3004/data",
        method : "GET"
     })
     .then((res)=>{
        dispatch(getDataSuccess(res.data))
     })
     .catch((error)=>{
        dispatch(getDataFailure())
     })
}




export const postData=(data)=>(dispatch)=>{
    dispatch(postDataRequiest())
    return axios({
       url : "http://localhost:3004/cart",
       method : "POST",
       data
    })
    .then((res)=>{
       dispatch(postDataSuccess(res.data))
       
    })
    .catch((error)=>{
       dispatch(postDataFailure())
    })
}


export const getCart=()=>(dispatch)=>{
    dispatch(getCartRequiest())
    return axios({
       url : "http://localhost:3004/cart",
       method : "GET"
    })
    .then((res)=>{
       dispatch(getCartSuccess(res.data))
    })
    .catch((error)=>{
       dispatch(getCartFailure())
    })
}



export const getDelete=(id)=>(dispatch)=>{
    dispatch(deleteCartRequiest())
    return axios({
       url : `http://localhost:3004/cart/${id}`,
       method : "DELETE",
     
    })
    .then((res)=>{
       dispatch(deleteCartSuccess(res.data))
    })
    .catch((error)=>{
       dispatch(deleteCartFailure())
    })
}




