import React from 'react'
import ToDoList from './ToDoList.js'
import BoxList from './BoxList.js'
import './App.css';

function App() {
  return (
    <div  className="row">


      <div className="col todo-list">
        <ToDoList/>

      </div>

      <div className='col color-box'>
        <BoxList/>
      </div>



    </div>
  );
}

export default App;
