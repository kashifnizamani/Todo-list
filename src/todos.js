export default class todo_items {
  constructor(title, dueDate, description, priority) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.dueDate = dueDate;
    this.description = description;
    this.priority = priority;
    this.isDone = false;
  }

  set isDone(value) {
    this._isDone = value;
  }
  set priority(value) {
    this._priority = value;
  }
}
