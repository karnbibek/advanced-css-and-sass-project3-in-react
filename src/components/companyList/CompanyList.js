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
            <div className="ui grid" style={{margin:"2rem"}}>
                <div className="three column row">
                    {props.companies.map((company) => {
                        return (
                            <div className="column" key={company.name}>
                                <div className="ui carded" onClick={() => clickHandler(company)}>{company.name}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }

    return (
        <div>
            {list()}
            {props.company.selectedCompany ?
                <>
                    <div className="centered">
                        <h2>
                        {props.company.selectedCompany.name}
                        </h2>
                    </div>
                    <CompanyJobs />
                </> : null}
        </div>
    );
};

const mapStateToProps = state => {
    return { companies: state.companies, company: state.selectedCompany };
}

export default connect(mapStateToProps, { selectedCompany, selectedCompanyJob })(CompanyList);