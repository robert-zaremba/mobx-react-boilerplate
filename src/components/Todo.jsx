import { observer } from 'mobx-react';
import React, { Component } from 'react';

function toggleTodo (todo) {
  todo.finished = !todo.finished
  todo.content.title += '_'
}

const Todo = observer(({ todo }) => (
  <li>
    <input
      type='checkbox'
      checked={todo.finished}
      onClick={toggleTodo.bind({}, todo)}
    />
    {todo.content.title}
  </li>
))

export default Todo
