import { combineReducers } from 'redux';
import companies from '../companyList/companies.json';
import jobs from '../../jobs.json';

const INITIAL_STATE = { 
    selectedCompany: null,
    selectedCompanyJob: null
}

const companiesReducer = () => {
    // return [companies.companies.companies];
    return companies.companies;
};

const jobsReducer = () => {
    return jobs;
}

const selectedCompanyReducer = (state= INITIAL_STATE, action) => {
    if (action.type === 'SELECTED_COMPANY') {
        return {...state, selectedCompany: action.payload};
    }
    else if (action.type === 'SELECTED_COMPANYJOB') {
        return {...state, selectedCompanyJob: action.payload};
    }

    return state;
};

export default combineReducers({
    companies: companiesReducer,
    jobs: jobsReducer,
    selectedCompany: selectedCompanyReducer
});