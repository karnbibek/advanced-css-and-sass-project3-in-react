import React from 'react';
import { connect } from 'react-redux';
import { selectedCompany, selectedCompanyJob } from '../actions'

import './CompanyList.css'
import CompanyJobs from './CompanyJobs';

const CompanyList = (props) => {

    const list = () => {

        const clickHandler = (company) => {
            props.selectedCompany(company);
            props.selectedCompanyJob(company.jobs[0])
        }

        return (
            <div className="company__header">
                {/* <div className="three column row"> */}
                {props.companies.map((company) => {
                    return (
                        <div className="company__header-item" key={company.name} onClick={() => clickHandler(company)}>
                            {/* <div className="ui carded" onClick={() => clickHandler(company)}> */}
                            {company.name}
                            {/* </div> */}
                        </div>
                    );
                })}
            </div>
            // </div>
        )
    }

    return (
        <div className="company">
            {list()}
            {props.company.selectedCompany ?
                // <div className="company__selected">
                <>
                    <div className="company__title">
                        {props.company.selectedCompany.name}
                    </div>
                    <CompanyJobs />
                    </>
                // </div>
                : null}
        </div>
    );
};

const mapStateToProps = state => {
    return { companies: state.companies, company: state.selectedCompany };
}

export default connect(mapStateToProps, { selectedCompany, selectedCompanyJob })(CompanyList);