const initialState =  [];


const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            return [
                ...state,
                 action.project
            ]
                
        default: 
            return state;
    }
}
export default projectReducer;