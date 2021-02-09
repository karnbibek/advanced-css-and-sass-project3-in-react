import {
    companiesReducer,
    jobsReducer,
    selectedCompanyReducer
} from './jobsReducers';
import authReducer from './authReducer';
import { combineReducers } from 'redux';


export default combineReducers({
    auth: authReducer,
    companies: companiesReducer,
    jobs: jobsReducer,
    selectedCompany: selectedCompanyReducer
});