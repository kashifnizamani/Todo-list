
import Project from "./projects";
import todo_item from "./todos";

export let project_list = [];

 export const Storage = {
     saveProjects(projects){
    localStorage.setItem("projects", JSON.stringify(projects));
 },

  getProjects(){
   const data = localStorage.getItem("projects");
   return JSON.parse(data);
   
 }
}

const stored = Storage.getProjects();
if(stored){
 project_list = stored.map(p => {
    const project = new Project(p.name);
    project.id = p.id;
    project.todos = p.todos.map(t => {
      const todo = new todo_item(t.title, t.dueDate, t.description, t.priority);
      todo.id = t.id;
      todo._isDone = t._isDone;
      return todo
    });
    return project;
  })
}
  else{
   const first = new Project("Default");
first.createTodo("default Todo", "noDate", "placeholder todo at first load", "medium");
project_list.push(first);
Storage.saveProjects(project_list);


  }
