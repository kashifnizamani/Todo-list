import "./style.css";
import "./styles/sidebar.css";
import "./styles/main_content.css";
import "./styles/dialog.css";
import "./styles/todos.css";
import "./modules/eventHandler";
import { displayProjects, displaytodos } from "./modules/DOM";
import { project_list } from "./modules/localStorage";



project_list.forEach((element) => {
  displayProjects(element);
  displaytodos(element.todos);
});

