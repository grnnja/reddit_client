import { AUTH_CODE } from "../actions/index"

export default (state = {}, action) => {
  switch(action) {
    case AUTH_CODE:
      return {...state, auth_code: action.payload.data}
    default: 
      state;
  }
}