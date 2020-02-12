import {UserActionTypes} from './user.types';

export const setCurrentUser = user =>({
    //always align creator type with reducer type expectation
    type: UserActionTypes.SET_CURRENT_USER, //type always a string capital and snake case
    payload: user
})