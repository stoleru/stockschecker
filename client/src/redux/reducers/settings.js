import { 
  SETTINGS_GETALL_REQUEST, 
  SETTINGS_GETALL_SUCCESS,
  SETTINGS_GETALL_FAILURE
} from "../actionTypes";

const initialState = {
  count: 0
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case SETTINGS_GETALL_REQUEST:
      return {
        loading: true
      };
    case SETTINGS_GETALL_SUCCESS:
      return {
        items: action.settings,
        loading: false
      };
    case SETTINGS_GETALL_FAILURE:
      return { 
        error: action.error,
        loading: false
      };
    default:
      return state
  }
}
