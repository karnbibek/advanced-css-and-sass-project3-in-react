import companies from '../companyList/companies.json';
import jobs from '../../jobs.json';
import {
    SELECTED_COMPANY,
    // SELECTED_JOB,
    SELECTED_COMPANYJOB
} from '../actions/types';

const INITIAL_STATE = { 
    selectedCompany: null,
    selectedCompanyJob: null
}

export const companiesReducer = () => {
    // return [companies.companies.companies];
    return companies.companies;
};

export const jobsReducer = () => {
    return jobs;
}

export const selectedCompanyReducer = (state= INITIAL_STATE, action) => {
    if (action.type === SELECTED_COMPANY) {
        return {...state, selectedCompany: action.payload};
    }
    else if (action.type === SELECTED_COMPANYJOB) {
        return {...state, selectedCompanyJob: action.payload};
    }

    return state;
};

