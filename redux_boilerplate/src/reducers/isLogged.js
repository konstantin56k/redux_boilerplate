const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN_OR_OUT':
            return !state
        default:
            return state
    }
}

export default loggedReducer;