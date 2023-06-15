import React, { useState } from "react";

import classes from "./TodoItem.module.css";
import { AiFillPlusSquare } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import NewSubTodo from "./NewSubTodo";
import NewSubTodoItem from "./NewSubtodoItem";
const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: () => void;
}> = (props) => {
  const [subTodo, setSubTodo] = useState<boolean>(false);
  const addSubTodo = (id: string) => {
    setSubTodo((prev) => !prev);
  };
  return (
    <>
      <li className={classes.item}>
        {props.text}
        <span>
          <AiFillPlusSquare
            className={classes.icon}
            onClick={() => addSubTodo(props.id)}
          />
          <AiFillDelete className={classes.icon} onClick={props.onRemoveTodo} />
        </span>
      </li>
      {subTodo && <NewSubTodo id={props.id} />}
      {subTodo && <NewSubTodoItem id={props.id} />}
    </>
  );
};

export default TodoItem;
