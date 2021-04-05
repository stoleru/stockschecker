import { 
  STOCKS_GETALL_REQUEST, 
  STOCKS_GETALL_SUCCESS,
  STOCKS_GETALL_FAILURE
} from "../actionTypes";

const initialState = {
  count: 0
};

export default function stocksRedycer(state = initialState, action) {
  switch (action.type) {
    case STOCKS_GETALL_REQUEST:
      return {
        loading: true
      };
    case STOCKS_GETALL_SUCCESS:
      return {
        items: action.stocks,
        loading: false
      };
    case STOCKS_GETALL_FAILURE:
      return { 
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}
