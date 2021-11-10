import React from "react";
import { Table } from "react-bootstrap";
import { useHistory } from "react-router";



const Home = ({ movieList, setSelectedMovie }) => {
    const history = useHistory();


    const showDetails = (selectedMovie) => {
        setSelectedMovie(selectedMovie);
        history.push('/movie-details');
    }

    // const filterMentionMembersName = (aishwarya) => {
    //     return aishwarya.toLowerCase().indexOf(searchMemberName.toLowerCase()) !== -1;
    // };

    // {movieList.filter(filterMentionMembersName).map((mentionMember) => (
    //     <div>{mentionMember}</div>
    // ))}


    return (
        <>
            <div class="container">

                <Table border='1'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            movieList.map((item) => {
                                return (
                                    <>
                                        <tr key={item.id} onClick={() => showDetails(item)}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}



export default Home;
