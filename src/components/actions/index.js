import {
    SELECTED_COMPANY,
    SELECTED_COMPANYJOB,
    SELECTED_JOB,
    SIGN_IN,
    SIGN_OUT
} from './types';

export const selectedCompany = company => {
    return {
        type: SELECTED_COMPANY,
        payload: company
    };
};

export const selectedCompanyJob = companyJob => {
    return {
        type: SELECTED_COMPANYJOB,
        payload: companyJob
    };
};

export const selectedJobDetails = job => {
    return {
        type: SELECTED_JOB,
        payload: job
    };
};

export const signIn = userId => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT,
    };
};