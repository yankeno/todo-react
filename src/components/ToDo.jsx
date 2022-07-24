import React, { Component }  from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';

export const ToDo = (props) => {
  const {todo, onCheck, onClick} = props;
  const handleChange = () => {
    onCheck(todo);
  }
  const handleDelete = () => {
    onClick(todo);
  }

  return (
    <label className="panel-block">
      <input 
      type="checkbox"
      checked={todo.done}
      onChange={handleChange}
      />
      <span
        className={classNames({
          'has-text-grey-light': todo.done
        })}
      >
        {todo.text}
      </span>
      <div style={{ flexGrow: 1 }}></div>
      <input 
      type="button" 
      value={"delete"}
      onClick={handleDelete}
      />
    </label>
  );
}

export default ToDo;
