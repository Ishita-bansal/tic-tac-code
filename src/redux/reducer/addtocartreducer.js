import { ACTIONTYPE } from "../action/actiontype";

const defaultValues = {
  addproducts: [],
};

const Addtocartreducer = (state = defaultValues, action) => {
  switch (action.type) {
    case ACTIONTYPE.ADDCART:
      return {
        ...state,
        addproducts: action.payload,
      };

    case ACTIONTYPE.REMOVECART:
      return {
        ...state,
        addproducts: state.addproducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default Addtocartreducer;
