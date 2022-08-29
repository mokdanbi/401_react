import { Route, Routes, Link } from 'react-router-dom';


const Nav = () => {
  return (
    <ul>
      <li> <Link to="/">HOME</Link> </li>
      <li> <Link to="/Sub01">Sub01</Link> </li>
      <li> <Link to="/Sub02">Sub02</Link> </li>
    </ul>
  )
}

const Home = () => {
  return (
    <>
      <h2>  HOME </h2>
      <p> 홈화면입니다. </p>
    </>
  )
}

const Sub01 = () => {
  return (
    <>
      <h2> Sub01 </h2>
      <p>  Sub01 화면입니다. </p>
    </>
  )
}
const Sub02 = () => {
  return (
    <>
      <h2> Sub02 </h2>
      <p>  Sub02 화면입니다.  </p>
    </>
  )
}


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sub01" element={<Sub01 />} />
        <Route path="/Sub02" element={<Sub02 />} />
      </Routes>
    </>

  );
}

export default App;
