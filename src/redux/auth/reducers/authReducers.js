const initialState = {

};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_IN':
            return {
                ...state
            }

        default:
            return state;
    }
}
export default authReducer;