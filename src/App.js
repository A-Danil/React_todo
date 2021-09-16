import React from 'react'
import './Scss/App.scss'
import TodoList from './Todo/TaskList'
import Context from './context'
import AddTodo from './Todo/AddTodo'

function App() {
  const [todos, setTodos] = React.useState([
  {id: 1, important: false, title: 'Make markup'},
  {id: 2, important: false, title: 'Set style'},
  {id: 3, important: false, title: 'Wite JS code'}
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.important = !todo.important
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
      title,
      id: Date.now(),
      important: false
      }
  ]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className='tasks'>
        <h1> React todo</h1>
        <AddTodo onCreate={addTodo} />

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <div className='no-tasks'><p>Oops, not any task!</p><p>Pleas add any task!</p></div>}
      </div>
    </Context.Provider>
  );
}

export default App;