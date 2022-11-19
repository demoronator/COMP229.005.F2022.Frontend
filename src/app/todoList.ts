import { TodoItem } from "./todoItem";

export class TodoList {
    constructor(public user: string, private _todoitems: TodoItem[] = []) { }

    get items(): readonly TodoItem[] {
        return this._todoitems;
    }

    addItem(task: string): void {
        this._todoitems.push(new TodoItem(task));
    }
}
