import { createContext } from 'react';

import { Person } from '../models';

interface State {
  peopleList: Person[];
}

interface Actions {
  getPeople: () => void;
}

interface Props {
  state: State;
  actions: Actions;
}

const Context = createContext({} as Props);

export default Context;
