import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TargetsPost(props) {
    const [ targets, postTargets ] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/api/targets/${props.match.params.id}`)
                const data = await response.json();
                postTargets(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);
    
    return (
        <div>
            <h2>{targets.companyName ? targets.companyName : ''}</h2>
            <h2>{targets.contactName ? targets.contactName : ''}</h2>
            <h2>{targets.notes ? targets.notes : ''}</h2>
            < Link to={`/${targets._id/edit}`}>
                <button>Add Target Company</button>
            </Link>
        </div>
    )
}