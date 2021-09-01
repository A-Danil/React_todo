import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({todo, index, onChange}) {
  const {removeTodo} = useContext(Context)
  const classes = []

  if (todo.important) {
    classes.push('important')
  }

  return (
    <li className='tasks__item'>
      <span className={classes.join(' ')}>
        <strong>{index +1}</strong>
        {todo.title}
      </span>
      <span className='tasks__important--btn'>
        <input
          className='tasks__btn--inp'
          type='checkbox'
          checked={todo.important}
          onChange={() => onChange(todo.id)}
        />
        <label className='tasks__label' htmlFor="imp">!</label>
      </span>

      <button className='tasks__btn--done' onClick={removeTodo.bind(null, todo.id)}>&#128504;</button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
