import { useReducer } from 'react';

import { InitialState, Person } from '../models';
import { api } from '../services';

import Context from './Context';
import Reducer from './Reducer';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: InitialState = {
  peopleList: [],
};

const Provider: React.FC<Props> = ({ children }) => {
  const [providerState, dispatch] = useReducer(Reducer, initialState);

  const getPeople = async () => {
    // Api call
    // const { type, value } = await api.get<Person[]>('');

    const type = 'success';
    const value: Person[] = [
      {
        firstName: 'tanner',
        email: 'ovct@gmail.com',
        lastName: 'linsley',
        age: 24,
        status: 'In Relationship',
      },
      {
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        status: 'Single',
        email: 'ovct@gmail.com',
      },
      {
        firstName: 'joe',
        email: 'ovct@gmail.com',
        lastName: 'dirte',
        age: 45,
        status: 'Complicated',
      },
    ];

    if (type === 'success') {
      dispatch({ type: 'getPeople', payload: value });
    }

    // if (type === 'error') {
    // dispatch({ type: '', payload: null });
    // }
  };

  const state = { peopleList: providerState.peopleList };
  const actions = { getPeople };

  return (
    <Context.Provider value={{ state, actions }}>{children}</Context.Provider>
  );
};

export default Provider;
