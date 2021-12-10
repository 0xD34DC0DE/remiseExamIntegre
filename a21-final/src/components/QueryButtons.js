import React, { useState, useEffect } from 'react'
import QueryButton from './QueryButton';

const QueryButtons = ({ setClients }) => {
    const [endpoint, setEndpoint] = useState("");

    useEffect(() => {
        if (endpoint !== "") {
            fetch(`http://localhost:8080${endpoint}`)
                .then(response => response.json())
                .then(clients => setClients(clients))
                .catch(error => console.error(error));
        }
    }, [endpoint])

    return (
        <div className="buttonDiv">
            <QueryButton setEndpoint={setEndpoint} endpoint={"/clients/all"} text={"Fetch tous les clients"} />
            <QueryButton setEndpoint={setEndpoint} endpoint={"/clients/gender/M"} text={"Fetch hommes"} />
            <QueryButton setEndpoint={setEndpoint} endpoint={"/clients/city/Toronto"} text={"Fetch ontariens"} />
        </div>
    )
}

export default QueryButtons;