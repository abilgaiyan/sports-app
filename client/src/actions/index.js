import axios from 'axios';
import { FETCH_USER, FETCH_ROLES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitRoles = (values, history) => async dispatch => {
  const res = await axios.post('/api/roles', values);

  history.push('/roles');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchRoles = () => async dispatch => {
  const res = await axios.get('/api/roles');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
