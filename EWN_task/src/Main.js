import axios from 'axios';
import { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";

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

    const selectRow = {
        mode: "checkbox",
        clickToSelect: true
    }

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
            <BootstrapTable
                keyField="id"
                data={data}
                columns={columns}
                striped
                hover
                condensed
                pagination={paginationFactory()}
                selectRow={selectRow}
            />
        </div>
    )
}

export default Main
