import List from './pages/ListTest';
import './basic.css';
import { useEffect, useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
  }, [])

  return (
    <>
      {data[0].id}
    </>
  )
}

export default App;