import { Storage } from "./localStorage";
import Project from "./projects";
import { project_list } from "./localStorage";

const sidebar = document.querySelector(".projectList");
const main_content = document.querySelector(".todoList");
const project_dialog = document.querySelector(".projects");
const todo_dialog = document.querySelector(".todos");

const activeClass = "active";

export function displayProjects(project) {
  const project_container = document.createElement("div");
  project_container.classList.add("project_item");
  project_container.setAttribute("data-id", project.id);
  if (project.name === "Default") project_container.classList.add("active");
  project_container.innerHTML = "<h2>" + project.name + " </h2>";
  sidebar.appendChild(project_container);
}

export function displaytodos(todos) {
  main_content.innerHTML = "";

  if (todos.length == 0) {
    const div = document.createElement("div");
    div.textContent = "No todos in this Project";
    div.classList.add("No_todos");
    main_content.append(div);
  }

  todos.forEach((element) => {
    const todo = document.createElement("div");
    getPriority(element, todo);
    const removebtn = document.createElement("button");
    const editbtn = document.createElement("button");
    const isDoneCheck = todoCheckbox();
    isDoneCheck.classList.add("check_isDone");
    editbtn.textContent = "Edit";
    editbtn.classList.add("editTodo");
    removebtn.textContent = "X";
    todo.setAttribute("data-id", element.id);
    todo.classList.add("todo_item");
    removebtn.classList.add("removeTodo");

    const span = document.createElement("span");
    span.innerHTML =
      "<div><h2>" +
      element.title +
      "</h2>" +
      "<div>" +
      element.dueDate +
      "</div> </div>";

    todo.prepend(removebtn);

    span.appendChild(isDoneCheck);
    todo.appendChild(span);
    todo.appendChild(editbtn);
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

  if (!name.checkValidity()) {
    name.reportValidity();
    return;
  } else {
    const project = new Project(name.value);
    project_list.push(project);
    Storage.saveProjects(project_list);
    project_dialog.close();
    displayProjects(project);
  }
}

export function createDOMtodo() {
  const title = document.querySelector("#title");
  const dueDate = document.querySelector("#dueDate");
  const description = document.querySelector("#description");
  const priority = document.querySelector("#priority");
  const activeProject = getActiveProject();

  if (!title.checkValidity()) {
    title.reportValidity(); //
    return;
  } else if (!dueDate.checkValidity()) {
    dueDate.reportValidity();
    return;
  }

  activeProject.createTodo(
    title.value,
    dueDate.value,
    description.value,
    priority.value
  );
  Storage.saveProjects(project_list);
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

export function removeTodo(event) {
  const clicked = event.target.closest(".removeTodo");
  if (!clicked) return;

  console.log("X clicked");

  const id = clicked.parentNode.getAttribute("data-id");
  clicked.parentNode.remove();

  getActiveProject().deleteTodo(id);
  Storage.saveProjects(project_list);

  displaytodos(getActiveProject().todos);
}

export function editTodo(event) {
  const clicked = event.target.closest(".editTodo");
  if (!clicked) return;

  todo_dialog.classList.add("edit_todo");

  const clickedID = clicked.parentNode.getAttribute("data-id");

  getActiveProject().todos.forEach((element) => {
    if (element.id === clickedID) {
      get_edit_dialog(element);
    }
  });
}

function get_edit_dialog(clickedTodo) {
  document.querySelector("#title").value = clickedTodo.title;
  document.querySelector("#dueDate").value = clickedTodo.dueDate;
  document.querySelector("#description").value = clickedTodo.description;
  document.querySelector("#priority").value = clickedTodo.priority;

  todo_dialog.setAttribute("data-id", clickedTodo.id);

  todo_dialog.showModal();
}

export function editDOMtodo() {
  const dialog = document.querySelector(".edit_todo");
  const todoID = dialog.getAttribute("data-id");

  const updatedTitle = dialog.querySelector("#title").value;
  const updatedDueDate = dialog.querySelector("#dueDate").value;
  const updatedDescription = dialog.querySelector("#description").value;
  const updatedPriority = dialog.querySelector("#priority").value;

  const activeProject = getActiveProject();
  console.log(activeProject);
  activeProject.todos.forEach((todoToEdit) => {
    if (todoToEdit.id === todoID) {
      todoToEdit.title = updatedTitle;
      todoToEdit.dueDate = updatedDueDate;
      todoToEdit.description = updatedDescription;
      todoToEdit.priority = updatedPriority;
    }
  });

  dialog.close();
  displaytodos(activeProject.todos);
}

function todoCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.la;
  checkbox.type = "checkbox";
  checkbox.id = "isDone";
  checkbox.name = "isDone";
  checkbox.checked = false;
  return checkbox;
}

export function toggle_isDonevalue(event) {
  const clicked = event.target.closest("#isDone");
  if (!clicked) return;

  const todoID = clicked.parentNode.parentNode.getAttribute("data-id");
  const activeProject = getActiveProject();
  activeProject.todos.forEach((e) => {
    if (e.id === todoID) {
      e.toggle_isDone();
    }
  });
}

function getPriority(todo, div) {
  if (todo.priority === "high") {
    div.style.cssText = "border-left: 10px solid red";
  } else if (todo.priority === "low") {
    div.style.cssText = "border-left: 10px solid green";
  } else {
    div.style.cssText = "border-left: 10px solid yellow";
  }
}
