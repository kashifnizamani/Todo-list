import todo_item from "./todos.js";

export default class Projects {
  constructor(name) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.todos = [];
  }

  createTodo(title, dueDate, description, priority) {
    const todo = new todo_item(title, dueDate, description, priority);

    this.todos.push(todo);
  }

  deleteTodo(ID) {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === ID) {
        this.todos.splice(i, 1);
      }
    }
  }
}
