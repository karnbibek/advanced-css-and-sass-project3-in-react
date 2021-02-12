import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

// import jobs from '../jobs.json';
import JobBrief from './JobBrief';
import SearchBar from './SearchBar';
import '../App.css';

const BasePageUsingHooks = (props) => {
    const [filterByName, setFilterByName] = useState('');
    const [filterByAddress, setFilterByAddress] = useState('');
    const [filteredJobs, setFilteredJobs] = useState(props.jobs);
    const [jobDetail, setJobDetail] = useState(props.jobs[0]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>
            setIsLoading(false),
            5000);
        // setFilteredJobs(props.jobs);
    });

    const nameChangeHandler = (name) => {
        let jobsByName = props.jobs.filter(job => {
            return job.name.toLowerCase().includes(name) && job.location.city.toLowerCase().includes(filterByAddress);
        })
        setFilterByName(name);
        setFilteredJobs(jobsByName);
    }

    const addressChangeHandler = (address) => {
        let jobsByAddress = props.jobs.filter(job => {
            return job.location.city.toLowerCase().includes(address) && job.name.toLowerCase().includes(filterByName);
        })
        setFilterByAddress(address);
        setFilteredJobs(jobsByAddress);
    }

    const jobDetailsHandler = (job) => {
        setJobDetail(job);
    }

    return (
        <div className="contents">
            <div className="contents__one">
                <div className="contents__one-header">
                    Mentor-Students Job Portal
                </div>
                <div className="contents__one-image">
                    <img src="https://picsum.photos/id/180/500/200" alt="" />
                </div>
            </div>
            <SearchBar nameChangeHandler={nameChangeHandler} addressChangeHandler={addressChangeHandler} />

            <div className="contents__grid">
                <div className="contents__grid__row">
                    {isLoading ?
                        <div className="loader">
                            Loading
                        </div>
                        :
                        <div className="contents__grid__row-col-1-of-3">
                            {filteredJobs.map((job) => (<JobBrief key={job.name} job={job} link='jobBrief' jobDetailsHandler={jobDetailsHandler} />))
                            }
                        </div>
                    }
                    {isLoading ? null :
                        <div className="contents__grid__row-col-2-of-3">
                            {jobDetail.name ?
                                <JobBrief job={jobDetail} link='jobDetail' jobDetailsHandler={jobDetailsHandler} />
                                : 'Select a job to see the details'
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(BasePageUsingHooks);
