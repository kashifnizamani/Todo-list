import todo_item from "./todos.js";

 export default class Projects {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }

  createTodo(title, dueDate, description, priority) {
    const todo = new todo_item(title, dueDate, description, priority);

    this.todos.push(todo);
  }

  deleteTodo(ID){

    for(let i = 0; i < this.todos.length; i++){

      if(this.todos[i].ID === ID){
        this.todos.splice(i, 1);
      }

    }
      
    }
  }




