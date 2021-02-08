import React from 'react';
import { connect } from 'react-redux';
import { selectedCompanyJob } from '../actions';
import '../JobBrief.css';

const CompanyJobList = (props) => {
    const { link } = props;

    return (
        <div className={`${link}`} onClick={() => props.selectedCompanyJob(props.job)}>
            {/* <div className="content"> */}
                <div className={`${link}__header`}>
                    <h2>{props.job.title}</h2>
                </div>
                <div className={`${link}__subheader`}>
                    {props.job.locations.map((location) => {
                        return <span key={location}>{location}  </span>
                    })}
                </div>
                <div className={`${link}__salary`}>
                        Salary : Rs.{props.job.salary}
                </div>
                <div className={`${link}__subheader`}>
                        Job Type : {props.job.jobType}
                </div>
                <ul className={`${link}__description`}>
                    <h4>Job Requirements : </h4>
                    {props.job.requirements.map((req) => {
                        return <li key={req}>{req}</li>
                    })}
                </ul>
            </div>
        // </div>

    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { selectedCompanyJob })(CompanyJobList);