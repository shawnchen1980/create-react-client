import * as types from '../action/types';
const initialState={userID:null}
const reducer = (state=initialState,action) => {
  switch(action.type) {
    case types.PROFILE_SETID:
      return {...state,userID:action.payload};
    
    default:
      return state;
  }
}
export default reducer;