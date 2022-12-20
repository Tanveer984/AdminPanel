import { useReducer } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react'

export const AuthContext = createContext();

const intialState ={
    user :JSON.parse(localStorage.getItem("user"))||null,
    loading:false,
    err:false
}
const reducer = (state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return{
                user :null,
                loading:true,
                err:false 
            }
        case "LOGIN-SUCCESS":
            return{
                user :action.payload,
                loading:false,
                err:false 
            }
        case "LOGIN_FAILURE":
            return{
                user :null,
                loading:false,
                err:action.payload
            }
        case "LOGOUT":
            return{
                user :null,
                loading:false,
                err:false
            }
        default:
            return state;
    }
}

export const AuthContextWrapper =({children})=>{
    const [state,dispatch] = useReducer(reducer,intialState)
    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return(
        <AuthContext.Provider value={{
            user:state.user,
            loading:state.loading,
            err:state.err,
        dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}