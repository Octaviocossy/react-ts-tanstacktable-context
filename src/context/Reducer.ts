import { InitialState } from '../models';

import { Actions } from './actions';

const Reducer = (state: InitialState, action: Actions) => {
  switch (action.type) {
    case 'getPeople':
      return {
        ...state,
        peopleList: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
