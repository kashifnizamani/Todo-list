
const sidebar = document.querySelector(".sidebar")



export function displayProjects(project){

    const project_container = document.createElement("div");
    project_container.classList.add("project_item")
      if(project.name === "Default")
         project_container.classList.add("active")
       project_container.innerHTML = "<h2>" + project.name + " </h2>";
       sidebar.appendChild(project_container);

}


