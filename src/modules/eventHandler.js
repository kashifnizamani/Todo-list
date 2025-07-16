import {
  openDialog,
  closeDialog,
  createDOMproject,
  createDOMtodo,
  setActiveProject,
  removeTodo,
  editTodo,
  editDOMtodo,
  toggle_isDonevalue,
} from "./DOM";

const add_btn = document.querySelectorAll(".add");
const close_dialog = document.querySelectorAll(".close");
const submit_dialog = document.querySelectorAll(".submit");
const sidebar = document.querySelector(".projectList");
const mainContent = document.querySelector(".main_content");

add_btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    openDialog(e);
  });
});

close_dialog.forEach((e) => {
  e.addEventListener("click", (e) => {
    closeDialog(e);
  });
});

submit_dialog.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.parentNode.classList[1] === "edit_todo") {
      editDOMtodo();
      e.target.parentNode.classList.remove("edit_todo");
    } else if (e.target.classList[1] === "project") {
      createDOMproject();
    } else {
      createDOMtodo();
    }
  });
});

sidebar.addEventListener("click", (event) => {
  setActiveProject(event);
});

mainContent.addEventListener("click", (e) => {
  removeTodo(e);
  editTodo(e);
  toggle_isDonevalue(e);
});
