import { POST_SIGNUP_FAILURE, GET_AUTHDATA_REQUIEST, GET_AUTHDATA_SUCCESS, POST_SIGNUP_REQUIEST, POST_SIGNUP_SUCCESS } from "./authAction"





const initstate={
    iserror:false,
    isloading:false,
    authSignin:[],
    authSignup :[]
}

export const signupReducer=(state=initstate,action)=>{
    switch(action.type){

        case POST_SIGNUP_REQUIEST:
            return({
                ...state,
                iserror:false,
                isloading:true
            })
            case POST_SIGNUP_SUCCESS:
                return({
                    ...state,
                    iserror:false,
                    isloading:false,
                    data:action.payload
                })
                case POST_SIGNUP_FAILURE:
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