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
    const [jobDetail, setJobDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() =>
            setIsLoading(false),
            2000);
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
        <div className="content">
            <div className="content__one">
                <div className="content__one-header">
                    {/* <h1 className="headers" style={{ marginBottom: "15px" }}> */}
                        Mentor-Students Job Portal
                        {/* </h1> */}
                </div>
                <div className="content__one-image">
                    <img src="https://picsum.photos/id/180/500/200" alt="" />
                </div>
            </div>
                <SearchBar nameChangeHandler={nameChangeHandler} addressChangeHandler={addressChangeHandler} />

            <div className="ui grid">
                <div className="ui row">
                    {isLoading ?
                        <div className="ui active inverted dimmer" style={{ marginTop: "20px" }}>
                            <div className="ui text loader">Loading</div>
                        </div>
                        :
                        <div className="six wide column">
                            {/* {filteredJobs ?  */}
                            {filteredJobs.map((job) => (<JobBrief key={job.name} job={job} link='link jobBrief' jobDetailsHandler={jobDetailsHandler} />))
                                // : 
                                // jobs.map((job) => (<JobBrief key={job.name} job={job} link='link jobBrief' jobDetailsHandler={jobDetailsHandler} />))
                            }
                        </div>
                    }
                    {isLoading ? null :
                        <div className="ten wide column" style={{ width: "62.5%" }}>
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
