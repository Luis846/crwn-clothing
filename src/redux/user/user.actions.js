export const setCurrentUser = user =>({
    //always align creator type with reducer type expectation
    type: 'SET_CURRENT_USER', //type always a string capital and snake case
    payload: user
})