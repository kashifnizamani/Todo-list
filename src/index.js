import "./style.css";
import "./styles/sidebar.css";
import "./styles/main_content.css";
import "./styles/dialog.css";
import "./styles/todos.css";
import Project from "./modules/projects";
import "./modules/eventHandler";
import { displayProjects, displaytodos } from "./modules/DOM";
import { project_list, Storage } from "./modules/localStorage";

console.log(project_list);




   
    project_list.forEach(element => {

        displayProjects(element);
        displaytodos(element.todos);
    });
        
   

   