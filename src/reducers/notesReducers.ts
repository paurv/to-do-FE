
export interface INotesState {
    notes: INotes[]
}
interface INotes {
    _id?: any;
    title: string;
    todolist: Array<any>
}

const initialState = {
    notes: [],
    activeNote: null
}

type Action = { type: 'Add_note', payload: string } |
                {type: 'Load_notes', payload: any[] }

export const notesReducer = (state: INotesState = initialState, action: Action) => {
    switch ( action.type ) {
        case 'Add_note': {
            return {
                ...state, 
                notes: [...state.notes, action.payload]
            }
        }
        case 'Load_notes':
            return {
                ...state,
                notes: [ ...action.payload] 
            }
        default: 
            return state
    } 
}