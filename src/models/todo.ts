class Todo {
  id: string;
  text: string;
  //changes
  text2: {
    mainText: string;
    subtext: string[];
  };
  constructor(todoText: string, subtext: string[]) {
    this.text = todoText;
    this.id = new Date().toISOString();
    //changes
    this.text2 = {
      mainText: todoText,
      subtext: subtext,
    };
  }
}

export default Todo;
