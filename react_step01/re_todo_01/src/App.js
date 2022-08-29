import { useRef, useState } from 'react';
import './App.css';

function App() {

  //1.기초 데이터 만들기 : 변하는 값이므로 state에 담음.
  const [todoList, setTodoList] = useState([
    { id: 1, content: "소주마시기", isDone: true, date: new Date().getTime() },
    { id: 2, content: "물마시기", isDone: false, date: new Date().getTime() },
  ]);

  const nextId = useRef(2)


  const [todoItm, setTodoItm] = useState({
    id: 3,
    content: "",
    isDone: false,
    date: new Date().getTime()
  })

  //
  const onChange = (e) => {
    // console.log(e.target.value)
    setTodoItm({
      id: nextId.current + 1,
      content: e.target.value,
      isDone: false,
      date: new Date().getTime()
    })
  }

  const todoModify = (id) => {
    setTodoList(
      todoList.map(it =>
        it.id == id ? { ...it, isDone: true } : it
      )
    )
    // let nuelmm = todoList.find(it => it.id == id);
    // nuelmm.isDone = true;
  }


  //2.리스트 component
  const TodoList = () => {
    return (
      todoList.map((it, itNum) => {
        return <li key={it.id}>{it.content} [{new Date(it.date).toLocaleString()}] <strong>{it.isDone ? 'DONE' : <button onClick={() => todoModify(it.id)}>do</button>}</strong></li>
      })
    )

  }



  //3. button을 누르면 배열에 값 추가하기
  const TodoListCleate = () => {
    console.log(todoItm);
    setTodoList([
      ...todoList,
      todoItm
      // 4. 이 값을 업데이트 시킬거임 { id: 3, content: "물마시기", isDone: false }
    ]
    );
    nextId.current = nextId.current + 1;
    setTodoItm({
      id: nextId.current + 1,
      content: '',
      isDone: false,
      date: new Date().getTime()
    })

  }

  return (
    <>
      <TodoList />
      <input name="content" onChange={onChange} value={todoItm.content} />
      <button onClick={TodoListCleate}>doit</button>
    </>
  );
}

export default App;
