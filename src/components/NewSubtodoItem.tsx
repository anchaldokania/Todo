import React, { useContext } from "react";
import { TodosContext } from "../store/todos.context";
import classes from "./TodoItem.module.css";

const NewSubTodoItem: React.FC<{
  id: string;
  // onRemoveTodo: () => void;
}> = (props) => {
  const todosCtx = useContext(TodosContext);
  const Subtodo = [...todosCtx.items];
  const singleSubtodo = Subtodo.filter((todo) => todo.id === props.id);
  let subText = singleSubtodo.map((todo) => todo.text2.subtext);

  return (
    <ul className={classes.todos}>
      {subText.flat().map((subtext) => (
        <li className={classes.subitem}>{subtext}</li>
      ))}
    </ul>
  );
};

export default NewSubTodoItem;
