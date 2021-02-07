import React from 'react';
import { connect } from 'react-redux';
import { selectedCompany, selectedCompanyJob } from '../actions';
import CompanyJobDetails from './CompanyJobDetails';
import CompanyJobList from './CompanyJobList';
import './CompanyList.css';

const CompanyJobs = ({ selected, selectedCompanyJob }) => {
    if (!selected.selectedCompany.jobs) {
        return null;
    }

    return (
        <div className="parent">
        <div className="ui grid">
            <div className="ui row">
                <div className="six wide column">
                    {selected.selectedCompany.jobs.map((job) => {
                        return <CompanyJobList job={job} key={job.title} classed='jobBrief' />
                    })
                    }
                </div>
                {selected.selectedCompanyJob ? 
                <div className="ten wide column">
                    {/* {selected.selectedCompanyJob.jobs.map((job) => {
                        return <CompanyJobList job={job} key={job.title} />
                    }) 
                    } */}
                    <CompanyJobDetails />
                </div> : null
                }
            </div>
        </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { selected: state.selectedCompany, selectedCompanyJob: state.selectedCompanyJob };
}

export default connect(mapStateToProps, { selectedCompany, selectedCompanyJob })(CompanyJobs);