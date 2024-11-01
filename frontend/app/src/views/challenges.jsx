import React, { useState, useEffect } from "react";
import { fetchApi } from "../Functions";
import { useNavigate } from "react-router-dom";

const Challenges = (props) => {
    const [challenges, setChallenges] = useState('');
    const navigate = useNavigate();

    const getData = async() => {
        const data = await fetchApi('GET', `/api/challenges/`, {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        })

        setChallenges(data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <React.Fragment>
            <h1>Challenges</h1>

            <table className="table resonsive nowrap" width="100%">
                <thead>
                    <tr>
                        <th>Challenge</th>
                        <th>Jaar</th>
                        <th>Boeken</th>
                    </tr>
                </thead>
                <tbody>
                    {challenges ? challenges.map((challenge, i) => {
                        return(
                            <tr key={i}>
                                <td onClick={() => navigate(`/challenges/${challenge.id}`)}>{challenge.name}</td>
                                <td>{challenge.year}</td>
                                <td>{challenge.nrofbooks}</td>
                            </tr>
                        )
                    }) : ''}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Challenges;