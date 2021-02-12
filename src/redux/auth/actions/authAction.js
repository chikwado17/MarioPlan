

export const signIn = (creds) => {
    return async (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        try {
            await firebase.auth().signInWithEmailAndPassword(
                creds.email,
                creds.password
            );
            dispatch({
                type: "LOGIN_IN"
            });
        }catch(err) {
            console.log(err);
        }
    }
}