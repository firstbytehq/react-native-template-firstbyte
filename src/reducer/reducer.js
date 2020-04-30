const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';
const LOGOUT = 'LOGOUT';

const initialState = {
  isSignedIn: false,
  user: {},
};

export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOGIN:
      return {...state, isSignedIn: true};
    case SIGNUP:
      return {...state, user: payload};
    case LOGOUT:
      return {...state, isSignedIn: false};
    default:
      return state;
  }
};

export const login = () => ({type: LOGIN});

export const signup = (user) => ({type: SIGNUP, payload: user});

export const logout = () => ({type: LOGOUT});
