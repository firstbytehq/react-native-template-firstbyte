const LOGIN = 'LOGIN';

const initialState = {
  isSignedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {...state, isSignedIn: true};
    default:
      return state;
  }
};

export const login = () => ({type: LOGIN});
