import "./style.css";
import "./styles/sidebar.css";
import "./styles/main_content.css";
import "./styles/dialog.css";
import "./styles/todos.css";
import Project from "./modules/projects";
import "./modules/eventHandler";
import { displayProjects, displaytodos } from "./modules/DOM";
import { Storage } from "./modules/localStorage";

const first = new Project("Default");

first.createTodo("default Todo", "noDate", "placeholder todo at first load", "medium");

 const saved = Storage.getProjects("projects");


console.log(saved);

displayProjects(first);

displaytodos(first.todos);

checkStorageAvailability();

getProjects("projects");