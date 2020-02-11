const INITIAL_STATE ={
    currentUser: null
}

//if state is undifined it will fall back to initial state^^ but null is a value
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;