import { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios("https://jsonplaceholder.typicode.com/comments")
            .then((res) => {
                setData(res.json);
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
