import { useState } from 'react'
import Input from './components/Input'
import Tasks from './components/Task'
import './App.css'


function App() {

  const [input, setInput] = useState("");
  const [Task, setTask] = useState([]);

  function newTask(task) {
    setInput(task)
  }

  function addToTaskArray() {
    if (input.length) {
      setTask([...Task, input])
      setInput("")
    }
  }

  function editTaskName(index) {
    let edit = prompt("Edit Todo")
    let array = [...Task]
    array.splice(index, 1, edit)
    setTask([...array])
  }
  function deleteTask(index) {
    let array = [...Task]
    array.splice(index, 1)
    setTask([...array])
  }


  return (
    <>
      <Input value={input} change={() => newTask(event.target.value)} btnFunc={addToTaskArray}></Input>

      <Tasks task={

        Task.map((item, index) => {
          return (<li key={index}>{item} <button onClick={() => editTaskName
            (index)}>Edit</button><button onClick={() => deleteTask(index)}>Delete</button></li>)
        })

      }>

      </Tasks>

    </>
  )
}

export default App
