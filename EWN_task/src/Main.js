import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const columns = [{
        dataField: "email",
        text: "Email",
        sort: true
    },
    {
        dataField: "postId",
        text: "ID",
        sort: true
    },
    {
        dataField: "name",
        text: "Name",
        sort: true
    }
    ]

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.data);
                console.log(res.data)
            }).catch((err) => {
                setError(err.message)
            })
    }


    return (
        <div>

        </div>
    )
}

export default Main
