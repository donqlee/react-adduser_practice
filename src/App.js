import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

function App() {
  const [info, setInfo] = useState([]);
  const addInfoHandler = (enteredName, enteredAge) => {
    setInfo(prevInfo => {
      const updatedInfo = [...prevInfo];
      updatedInfo.push({ name : enteredName, age : enteredAge, id : Math.random().toString() });
      return updatedInfo;
    })
  }
  let content = (
    <p style={{ textAlign : 'center'}}>No user found. Maybe add one?</p>
  )
  if(info.length > 0){
    content = (
        <UserList items={info}/>
    )
  }

  return (
    <div>
      <section id="user-form">
        <UserInput onAddInfo = {addInfoHandler}/>
      </section>
      <section id="user">
        {content}
      </section>
      
    </div>
  );
}

export default App;
