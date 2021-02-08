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
        <div className="contents__grid__row">
            {/* <div className="ui grid">
                <div className="ui row"> */}
                    <div className="contents__grid__row-col-1-of-3">
                        {selected.selectedCompany.jobs.map((job) => {
                            return <CompanyJobList job={job} key={job.title} classed='jobBrief' link="jobBrief" />
                        })
                        }
                    </div>
                    {selected.selectedCompanyJob ?
                        <div className="contents__grid__row-col-2-of-3">
                            <CompanyJobDetails />
                        </div> : null
                    }
                </div>
            // </div>
        // </div>
    );
}

const mapStateToProps = state => {
    return { selected: state.selectedCompany, selectedCompanyJob: state.selectedCompanyJob };
}

export default connect(mapStateToProps, { selectedCompany, selectedCompanyJob })(CompanyJobs);