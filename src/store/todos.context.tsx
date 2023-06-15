import React from "react";
import { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  addSubTodo: (text: string, id: string) => void;
};
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: String) => {},
  addSubTodo: (text: string, id: string) => {},
});

const TodoContextprovider: React.FC<React.PropsWithChildren<{}>> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    //changes
    // const newTodo = new Todo(todoText);
    const newTodo = new Todo(todoText, []);
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };
  //changes
  const addSubTodohandler = (subTodo: string, id: string) => {
    // const todo = todos.filter((todo) => todo.id === id);

    const updatedSubtodo = [...todos];
    updatedSubtodo.forEach((todo) => {
      if (todo.id === id) {
        todo.text2.subtext.push(subTodo);
      }
    });

    setTodos((prev) => updatedSubtodo);
    console.log(todos);
  };

  const removeTodohandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodohandler,
    //changes
    addSubTodo: addSubTodohandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextprovider;
