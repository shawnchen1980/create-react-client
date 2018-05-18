import * as types from '../action/types';
const initialState={user:null,token:null}
const reducer = (state=initialState,action) => {
  switch(action.type) {
    case types.AUTH_SIGNIN:
      return {...state,...action.payload};
    case types.AUTH_SIGNOUT:
      return {...state,user:null,token:null};
    default:
      return state;
  }
}
export default reducer;