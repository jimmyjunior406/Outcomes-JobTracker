import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NetworksPost(props) {
    const [ networks, postNetworks ] = useState({})
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`/api/networks/${props.match.params.id}`)
                const data = await response.json();
                postNetworks(data)
            } catch (error) {
                console.log(error);
            }
        })()
    }, []);

    return (
        <div>
            <h2>{networks.name ? networks.name : ''}</h2>
            <h2>{networks.company ? networks.company : ''}</h2>
            <h2>{networks.notes ? jobs.notes : ''}</h2>
            < Link to={`/${networks._id/edit}`}>
                <button>Add Networks and Connections</button>
            </Link>
        </div>
    )
}