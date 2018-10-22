import { combineReducers }  from 'redux';
import { reducer as reduxForm} from 'redux-form';
import authReducer from './authReducers';
import rolesReducer from './roleReducers';

export default combineReducers({
  auth : authReducer,
  form: reduxForm,
  roles: rolesReducer
});