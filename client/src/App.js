import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllTasks from "./pages/AllTasks";
import NewTask from "./pages/NewTask";
import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        {/* <Row> */}
          <Routes>
            <Route path='/' element={<Navigate to='/all' />} />
            <Route path='/new-task' element={<NewTask />} />
            <Route path='/all' element={<AllTasks />} />
          </Routes>
        {/* </Row> */}
      </Container>
    </>
  );
}

export default App;
