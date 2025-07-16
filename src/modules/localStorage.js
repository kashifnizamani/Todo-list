import { project_list } from "./DOM";

 export function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export function checkStorageAvailability(){
if (storageAvailable("localStorage")) {
     

} else {
  console.log("not Available")
}
}

 export const Storage = {
     saveProjects(projects){
    localStorage.setItem("projects", JSON.stringify(projects));
 },

  getProjects(key){
   const data = localStorage.getItem(key);

   return data ? JSON.parse(data) : null;
   
 }
}