
const sidebar = document.querySelector(".projectList");
const main_content = document.querySelector(".todoList");

 export const project_list = [];


export function displayProjects(project){
    project_list.push(project)
    const project_container = document.createElement("div");
    project_container.classList.add("project_item")
    project_container.setAttribute("data-id", project.id)
      if(project.name === "Default")
         project_container.classList.add("active")
       project_container.innerHTML = "<h2>" + project.name + " </h2>";
       sidebar.appendChild(project_container);

}


 export function displaytodos(todos){
      main_content.innerHTML = "";
      console.log(todos);
    todos.forEach(element => {
      
        const todo = document.createElement("div");
        todo.classList.add("todo_item")
        todo.innerHTML = "<h2>" + element.title + "</h2>" + "<div>" + element.description + "</div> <br>" + element.dueDate ;
        main_content.appendChild(todo);
    });
}


