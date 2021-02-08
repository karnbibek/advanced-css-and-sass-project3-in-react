import React from 'react';
import { connect } from 'react-redux';
import CompanyJobList from './CompanyJobList';

const CompanyJobDetails = (props) => {
    return (
        // <div>hello</div>
        <CompanyJobList job={props.selectedCompany.selectedCompanyJob} link="jobDetail" />
    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(CompanyJobDetails);