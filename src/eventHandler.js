
import Project from "./projects";

const add_btn = document.querySelectorAll(".add");
const project_dialog = document.querySelector(".projects");
const todo_dialog = document.querySelector(".todos");
const close_dialog = document.querySelectorAll(".close");
const submit_dialog = document.querySelectorAll(".submit")




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



