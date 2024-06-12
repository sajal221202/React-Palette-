import React ,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';
//initial state
const initialState = {
    transaction:[]
}

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Action-delete
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }
    //action-add
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transaction:state.transaction,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>
    )

}