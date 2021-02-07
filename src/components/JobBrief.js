import React, { Component } from 'react';
import './JobBrief.css'

class JobBrief extends Component {
    render() {
        const { job, link, jobDetailsHandler } = this.props;
        return (
                  <div className={`ui ${link}`} onClick={() => jobDetailsHandler(job)}>
                    <div className="content">
                      <div className="header">
                        <h4>{job.name}</h4>
                      </div>
                      <div className="ui sub header city">
                        {job.location.city}
                      </div>
                      <div className="image">
                        <img src={job.logo} alt="" />
                      </div>
                      <p className="paragraph">{job.description}</p>
                      <div className="content">
                        <div className="header">
                          Salary : Rs.{job.salary}
                        </div>
                        <span className="ui primary button">Apply</span>
                        <span className="ui red button">Not Interested</span>
                      </div>
                    </div>
                    {/* <hr /> */}
                  </div>
        );
    }
}

export default JobBrief;