import { ACTIONTYPE } from "../action/actiontype";

const defaultValues = {
    addproducts :[]
}

const Addtocartreducer = (state=defaultValues,action) =>{

    
    
    switch(action.type){
        case ACTIONTYPE.ADDCART:
            return{
              ...state,
                addproducts:[...state.addproducts,action.payload]
            } 

        case ACTIONTYPE.INCREMENT:
             return{
                ...state,
            addproducts : state.addproducts.map((item)=>{
                
                if(item.id === action.payload){
                   return{...state,quantity:item.quantity + 1}
                }
                return item;
            })
        }

        case ACTIONTYPE.DECREMENT:
            return{
                ...state,
                addproducts : state.addproducts.map((item)=>{
                    
                    if(item.id === action.payload){
                        return{...state,quantity:item.quantity - 1}
                    }
                    return item;
                })
            }
        case ACTIONTYPE.REMOVECART:
                return {
                    ...state,
                    addproducts: state.addproducts.filter(product => product.id !== action.payload)
                };
            default: return state
    }

}

export default Addtocartreducer;