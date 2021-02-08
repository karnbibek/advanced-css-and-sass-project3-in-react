import React, { Component } from 'react';
import './JobBrief.css'

class JobBrief extends Component {
    render() {
        const { job, link, jobDetailsHandler } = this.props;
        return (
                  <div className={`${link}`} onClick={() => jobDetailsHandler(job)}>
                      <div className={`${link}__header`}>
                        <h4>{job.name}</h4>
                      </div>
                      <div className={`${link}__subheader`}>
                        {job.location.city}
                      </div>
                      <div className={`${link}__image`}>
                        <img src={job.logo} alt="" />
                      </div>
                      <div className={`${link}__paragraph`}>{job.description}</div>
                        <div className={`${link}__salary`}>
                          Salary : Rs.{job.salary}
                        </div>
                      <div className={`${link}__button`}>
                        <button className={`${link}__button-apply button`}>Apply</button>
                        <button className={`${link}__button-reject button`}>Not Interested</button>
                      </div>
                    {/* </div> */}
                    {/* <hr /> */}
                  </div>
        );
    }
}

export default JobBrief;