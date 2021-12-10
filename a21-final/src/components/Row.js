import React from 'react'

const Row = ({id, firstName, lastName, gender, birthDate}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{gender}</td>
            <td>{birthDate}</td>
        </tr>
    )
}

export default Row;