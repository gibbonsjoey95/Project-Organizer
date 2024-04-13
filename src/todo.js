class Todo {
    static IdCounter = 0
    constructor(title, description, dueDate, priority, checklist, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.notes = notes
        this.id = ++Todo.IdCounter;
        this.active = false
    }
}

export { Todo }