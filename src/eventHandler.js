import { displayProjects } from "./DOM";
import Project from "./projects";

const add_btn = document.querySelectorAll(".add");
const project_dialog = document.querySelector(".projects");
const todo_dialog = document.querySelector(".todos");
const close_dialog = document.querySelectorAll(".close");
const submit_dialog = document.querySelectorAll(".submit")

const sidebar = document.querySelector(".sidebar");
const activeClass = "active";

const project_list = [];





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
            project_list.push(project);
            project_dialog.close();
            displayProjects(project);
            }
            else{
              
           const current_project = document.querySelector(".project_item.active");
           project_list.forEach((e)=>{
              
            if(e.id === current_project.getAttribute("data-id")){
                console.log(true);
                todo_dialog.close()

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
  console.log("hello");
});

