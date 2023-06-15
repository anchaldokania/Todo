import React from "react";
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos.context";
import classes from "./NewTodo.module.css";

const NewSubTodo: React.FC<{ id: string }> = (props) => {
  const todosCtx = useContext(TodosContext);

  const subTodoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = subTodoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      //throw an error
      return;
    }

    todosCtx.addSubTodo(enteredText, props.id);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label>SubTodo text</label>
      <input type="text" id="text" ref={subTodoTextInputRef} />
      <button>Add subTodo</button>
    </form>
  );
};

export default NewSubTodo;
