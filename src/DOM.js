
const sidebar = document.querySelector(".sidebar");
const main_content = document.querySelector(".main_content");



export function displayProjects(project){

    const project_container = document.createElement("div");
    project_container.classList.add("project_item")
    project_container.setAttribute("data-id", project.id)
      if(project.name === "Default")
         project_container.classList.add("active")
       project_container.innerHTML = "<h2>" + project.name + " </h2>";
       sidebar.appendChild(project_container);

}


function displaytodos(todos){
    todos.forEach(element => {
        const todo = document.createElement("div");
        todo.classList.add("todo_item")
        todo.innerHTML = "<h2>" + element.title + "</h2>" + "<div>" + element.description + "</div>";
        main_content.appendChild(todo);
    });
}


