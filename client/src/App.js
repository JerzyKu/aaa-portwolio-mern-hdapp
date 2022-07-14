import { Routes, Route, Navigate  } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllTasks from "./pages/AllTasks";
import NewTask from "./pages/NewTask";
import React from 'react'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path='/' element={<Navigate  to='/all'/>} />
          <Route path='/new-task' element={<NewTask/>}/>
          <Route path='/all' element={<AllTasks/>}/>
      </Routes>
    </>
  );
}

export default App;
