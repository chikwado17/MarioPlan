const initialState = {
    projects: [
        {id: '1', title: 'PSIS SHEKINAH INTERNATIONAL SCHOOL', content: 'blah blah blah'},
        {id: '2', title: 'PROGRAMMING COURSES', content: 'blah blah blah'},
        {id: '3', title: 'LEARNING GOALS', content: 'blah blah blah'}
    ]
};

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
      
    }
    return state;
}
export default projectReducer;