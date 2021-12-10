

import React from 'react'
import Row from './Row'

const ClientTable = ({ clients }) => {
    return (
        <table>
            <tbody>
                {
                    clients.map((client, index) => <Row key={index} {...client} />)
                }
            </tbody>
        </table>
    )
}

export default ClientTable;
