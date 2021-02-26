import React, { useState } from 'react';
import Text from "./Text";
import Todo from "./Todo";
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    {text:"text1"},
    {text:"text2"}
  ])

  const increaseCount = () =>{
    setCount(count+1);
  }

  return (
      <div className="app-component">
          <p>You have clicked {count} times.</p>
          <button onClick={increaseCount}>Increase the counter</button>

          {todos.map((todo, index) => (
            <Todo
              key = {index}
              todo = {todo}
              index = {index}
            />
          ))}

          <Text
          count = {count}
          />
      </div>
  );
}

export default App;
