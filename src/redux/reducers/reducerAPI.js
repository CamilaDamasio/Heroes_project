import { LOADING } from '../actions';

const INITIAL_STATE = {
  heroes: [],
  search: '',
  loading: true,
};

const heroes = (state = INITIAL_STATE, action) => {
  const { type } = action;

  switch (type) {

  case LOADING:
    return { ...state, loading: action.payload };

  default:
    return state;
  }
};

export default heroes;