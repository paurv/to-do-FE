export interface INotesState {
    notes: INotes[]
}

export interface INotes {
    _id?: any;
    title: string;
    todolist: Array<any>
}

export interface IToDo {
	desc: string;
	done: boolean;
}