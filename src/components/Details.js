import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router';

const Details = ({ selectedMovie }) => {

    console.log('selectedMovie: ', selectedMovie)
    const history = useHistory();



    useEffect(() => {
        if (selectedMovie.length == 0) {
            history.push('/')
        }
    }, [])

    return (
        <>
            <Table border='1'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{selectedMovie.id}</td>
                        <td>{selectedMovie.name}</td>
                        <td>{selectedMovie.email}</td>
                        <td>{selectedMovie.address.city}</td>
                        <td>{selectedMovie.phone}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    )
}

export default Details
