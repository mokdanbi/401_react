import { useEffect, useState } from "react";
import './basic.css';


function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
      .then(response => response.json())
      .then(result => setData(result))
  }, [])

  return (
    <div className="list">
      {
        data.map(it =>
          <div key={it.id}>
            <h3>{it.title}</h3>
            <img src={it.url} />
            <small>{it.url}</small>
          </div>)
      }
    </div>
  );
}

export default App;
