export default class todo_items {
  constructor(title, dueDate, description, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.isDone = false;
  }

 
 toggle_isDone(){
  this.isDone = !this.isDone;
 }

  set priority(value) {
    this._priority = value;
  }
  get priority() {
  return this._priority;
}
}
