import React, { useState, useEffect } from "react";
import { fetchApi } from "../Functions";
import { withRouter } from "../components/withRouter";

const ChallengeDetail = (props) => {
    const [challenge, setChallenge] = useState('');
    const [booksOfChallenge, setBooksOfChallenge] = useState('');

    const getData = async() => {
        const [data, books] = await Promise.all([
            fetchApi('GET', `/api/challenge/${props.router.params.challengeid}`, {
                "Authorization": "Bearer " + localStorage.getItem("token"),
            }),
            fetchApi('GET', `/api/books`, {
                "Authorization": "Bearer " + localStorage.getItem("token"),
                "challengeid": props.router.params.challengeid
            })
        ])
        setChallenge(data)
        setBooksOfChallenge(books)
    }

    const removeFromChallenge = async(bookid) => {
        const formData = new FormData();
        formData.append("challengeid", bookid);
        
        const data = await fetchApi('PUT', `/api/books/${bookid}`, {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        }, formData)
        getData();
    }

    const switchReaded = async(bookid, value) => {
        const formData = new FormData();
        formData.append("readed", value == true ? 1 : 0);
        
        const data = await fetchApi('PUT', `/api/books/${bookid}`, {
            "Authorization": "Bearer " + localStorage.getItem("token"),
        }, formData)
        getData();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <React.Fragment>
            <h1>{challenge.name}</h1>
            {challenge.year} - {challenge.nrofbooks} boeken

            <h2>Boeken van challenge</h2>
            {booksOfChallenge ? booksOfChallenge.map((book, i) => {
                return(
                    <tr key={i}>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td><input type="checkbox" defaultChecked={book.readed == 1 ? 'true' : ''} onChange={(event) => switchReaded(book.id, event.target.checked)}/></td>
                        <td><button onClick={() => removeFromChallenge(book.id)}>Verwijderen</button></td>
                    </tr>
                )
            }) : ''}
        </React.Fragment>
    )
}

export default withRouter(ChallengeDetail);