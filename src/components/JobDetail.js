import React, { Component } from 'react';
import JobBrief from './JobBrief';

class JobDetail extends Component {
    
    render() {
        const JobDet = () => {
            return (this.props.job ? 
            <JobBrief job={this.props.job} />
            : null)
        }
        const { job } = this.props;
        return (
            <>
            {(this.props.job.length > 0 ? 
                <JobBrief job={this.props.job} />
                : null
            )}
            </>
        );
    }
}

export default JobDetail;