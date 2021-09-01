import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate }) {
  const [value, setValue] = useState('')

  function submitHandler(event) {
    event.preventDefault()

    if(value.trim()) {
      onCreate(value)
      setValue('')
    }
  }
  
  return (
    <form className='form' onSubmit={submitHandler}>
      <input className='form__input' placeholder='Add any task' value={value} onChange={event => setValue(event.target.value)}/>
      <button className='form__btn' type='submit'>Add</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
}

export default AddTodo