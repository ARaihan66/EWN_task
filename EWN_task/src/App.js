import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

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
    <div className="App">

    </div>
  );
}

export default App;
