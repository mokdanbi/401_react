import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState()

  const todoCreate = () => {
    setTodoList([
      ...todoList,
      input
    ])
  }

  const todo = (e) => {
    setInput(e.target.value)
  }


  return (
    <>
      <ul>
        {
          todoList.map(
            (it, idx) => <li key={idx}>{it}</li>
          )
        }
      </ul>
      <input onChange={todo} value={input} />
      <button onClick={todoCreate}>OK</button>
    </>
  );
}

export default App;
