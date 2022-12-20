import { useReducer } from "react";
import { createContext } from "react";

const INTIAL_STATE ={
    darkMode:false,
}
const reducer =(state,action)=>{
    switch(action.type){
        case "LIGHT":{
            return{
                darkMode:false,
            }
        }
        case "DARK":{
            return{
                darkMode:true
            }
        }
        case "TOGGLE":{
            return{
                darkMode:!state.darkMode,
            }
        }
        default:
          return state;
    }
} 

export const ThemeContext = createContext();

export const ThemeContextWrapper = ({children}) =>{

    const [state,dispatch] = useReducer(reducer,INTIAL_STATE)
    return(
        <ThemeContext.Provider value={{darkMode:state.darkMode,dispatch}}>{children}</ThemeContext.Provider>
    )
}