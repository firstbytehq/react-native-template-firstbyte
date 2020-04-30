const LOGIN = 'LOGIN';
const SIGNUP = 'SIGNUP';

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
    default:
      return state;
  }
};

export const login = () => ({type: LOGIN});

export const signup = (user) => ({type: SIGNUP, payload: user});
