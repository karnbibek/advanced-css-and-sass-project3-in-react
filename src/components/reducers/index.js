import {
    companiesReducer,
    jobsReducer,
    selectedCompanyReducer
} from './jobsReducers';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'


export default combineReducers({
    auth: authReducer,
    companies: companiesReducer,
    jobs: jobsReducer,
    selectedCompany: selectedCompanyReducer,
    form: formReducer
});