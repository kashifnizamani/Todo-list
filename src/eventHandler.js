import { displayProjects, project_list, displaytodos } from "./DOM";
import Project from "./projects";

const add_btn = document.querySelectorAll(".add");
const project_dialog = document.querySelector(".projects");
const todo_dialog = document.querySelector(".todos");
const close_dialog = document.querySelectorAll(".close");
const submit_dialog = document.querySelectorAll(".submit")

const sidebar = document.querySelector(".projectList");
const activeClass = "active";







add_btn.forEach((e)=>{

    e.addEventListener("click", (e)=>{
     



        if(e.target.classList[1] === "project")
            project_dialog.showModal();
        else
           todo_dialog.showModal();

    })

})

close_dialog.forEach((e)=> {
    e.addEventListener("click", (e)=> {

        if(e.target.classList[1] === "project")
            project_dialog.close();
        else
           todo_dialog.close();

    })
})

submit_dialog.forEach((e)=>{
        e.addEventListener("click", (e)=>{

            e.preventDefault();

            if(e.target.classList[1] === "project"){
            const name = document.querySelector("#name");
            const project = new Project(name.value);
            project_dialog.close();
            displayProjects(project);
            }
            else{
              
           const current_project = document.querySelector(".project_item.active");
           console.log(current_project);
           console.log(project_list)
           const title = document.querySelector("#title");
           const dueDate = document.querySelector("#dueDate");
           const description = document.querySelector("#description");
           const priority = document.querySelector("#priority")
           project_list.forEach((e)=>{
            
            if(e.id === current_project.getAttribute("data-id")){
               const todo = e.createTodo(title.value, dueDate.value, description.value, priority.value);
                todo_dialog.close()
                displaytodos(e.todos);

                //compare data id to get the correct project and then make todos in it
            }

           })
            

            }

        })
})




// Delegated event listener (works for dynamically added .project_item)
sidebar.addEventListener("click", (event) => {
  const clicked = event.target.closest(".project_item");
  if (!clicked) return; // Ignore clicks outside .project_item

  // Remove 'active' from all
  sidebar.querySelectorAll(".project_item").forEach(item => {
    item.classList.remove(activeClass);
  });

  // Added 'active' to the clicked one
  clicked.classList.add(activeClass);
  project_list.forEach((element)=>{
    if(element.id === clicked.getAttribute("data-id"));
       displaytodos(element.todos);
  })
  
});

