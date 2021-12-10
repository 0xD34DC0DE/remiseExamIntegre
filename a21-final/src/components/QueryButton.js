import React from 'react'

const QueryButton = ({text, endpoint, setEndpoint}) => {

    const onClick = () => {
        setEndpoint(endpoint)
    }

    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

export default QueryButton;
