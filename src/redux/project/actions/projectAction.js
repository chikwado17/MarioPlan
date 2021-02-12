    
export const createProject = (project) => {
    return async (dispatch, getState,  { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        try {
            await firestore.collection('projects').add({
                ...project,
                authorFirstName: 'Emmanuel',
                authorLastName: 'Nworie',
                authorId: 1234,
                createdAt: new Date()
            });

            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
       }catch(err) {
           console.log(err);
       }
    }
}