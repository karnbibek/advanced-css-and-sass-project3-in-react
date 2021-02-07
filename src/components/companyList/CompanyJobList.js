import React from 'react';
import { connect } from 'react-redux';
import { selectedCompanyJob } from '../actions';
import '../JobBrief.css';

const CompanyJobList = (props) => {
    return (
        <div className={`ui ${props.classed}`} onClick={() => props.selectedCompanyJob(props.job)}>
            <div className="content">
                <div className="header">
                    <h2>{props.job.title}</h2>
                </div>
                <div className="ui sub header city">
                    {props.job.locations.map((location) => {
                        return <span key={location}>{location}  </span>
                    })}
                </div>
                <div className="ui sub header">
                        Salary : Rs.{props.job.salary}
                </div>
                <div className="content">
                    <div className="header">
                        Job Type : {props.job.jobType}
                    </div>
                </div>
                <ul>
                    <h4>Job Requirements : </h4>
                    {props.job.requirements.map((req) => {
                        return <li key={req}>{req}</li>
                    })}
                </ul>
            </div>
            {/* <hr /> */}
        </div>

    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { selectedCompanyJob })(CompanyJobList);