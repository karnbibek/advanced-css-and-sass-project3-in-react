export const selectedCompany = company => {
    return {
        type: 'SELECTED_COMPANY',
        payload: company
    };
};

export const selectedCompanyJob = companyJob => {
    return {
        type: 'SELECTED_COMPANYJOB',
        payload: companyJob
    };
};

export const selectedJobDetails = job => {
    return {
        type: 'SELECTED_JOB',
        payload: job
    };
};