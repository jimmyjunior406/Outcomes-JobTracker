import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function JobsPost(props) {
    const [ jobs, postJobs ] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/api/jobs/${props.match.params.id}`)
                const data = await response.json();
                postJobs(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <div>
            <h2>{jobs.companyName ? jobs.companyName : ''}</h2>
            <h2>{jobs.dateApplied ? jobs.dateApplied : ''}</h2>
            <h2>{jobs.contactName ? jobs.contactName : ''}</h2>
            <h2>{jobs.notes ? jobs.notes : ''}</h2>
            < Link to={`/${jobs._id/edit}`}>
                <button>Add New Job Application</button>
            </Link>
        </div>
    )
}



