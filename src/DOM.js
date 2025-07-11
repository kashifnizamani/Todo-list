import Project from "./projects";

const sidebar = document.querySelector(".projectList");
const main_content = document.querySelector(".todoList");

const project_dialog = document.querySelector(".projects");
const todo_dialog = document.querySelector(".todos");

const activeClass = "active";

export const project_list = [];

export function displayProjects(project) {
  project_list.push(project);
  const project_container = document.createElement("div");
  project_container.classList.add("project_item");
  project_container.setAttribute("data-id", project.id);
  if (project.name === "Default") project_container.classList.add("active");
  project_container.innerHTML = "<h2>" + project.name + " </h2>";
  sidebar.appendChild(project_container);
}

export function displaytodos(todos) {
  main_content.innerHTML = "";

  todos.forEach((element) => {
    const todo = document.createElement("div");
    todo.classList.add("todo_item");
    todo.innerHTML =
      "<h2>" +
      element.title +
      "</h2>" +
      "<div>" +
      element.description +
      "</div> <br>" +
      element.dueDate;
    main_content.appendChild(todo);
  });
}

export function openDialog(e) {
  if (e.target.classList[1] === "project") project_dialog.showModal();
  else todo_dialog.showModal();
}

export function closeDialog(e) {
  if (e.target.classList[1] === "project") project_dialog.close();
  else todo_dialog.close();
}

export function getActiveProject() {
  const current_project = document.querySelector(".project_item.active");
  const currentId = current_project.getAttribute("data-id");

  const project = project_list.find((p) => p.id === currentId); 
  return project;
}

export function createDOMproject() {
  const name = document.querySelector("#name");
  const project = new Project(name.value);
  project_dialog.close();
  displayProjects(project);
}

export function createDOMtodo() {
  const title = document.querySelector("#title");
  const dueDate = document.querySelector("#dueDate");
  const description = document.querySelector("#description");
  const priority = document.querySelector("#priority");

  const activeProject = getActiveProject();

  getActiveProject().createTodo(
    title.value,
    dueDate.value,
    description.value,
    priority.value
  );
  todo_dialog.close();
  displaytodos(activeProject.todos);
}

export function setActiveProject(event) {
  const clicked = event.target.closest(".project_item");
  if (!clicked) return; // Ignore clicks outside .project_item

  // Remove 'active' from all
  sidebar.querySelectorAll(".project_item").forEach((item) => {
    item.classList.remove(activeClass);
  });

  // Added 'active' to the clicked one
  clicked.classList.add(activeClass);
  project_list.forEach((element) => {
    if (element.id === clicked.getAttribute("data-id"))
      displaytodos(element.todos);
  });
}
