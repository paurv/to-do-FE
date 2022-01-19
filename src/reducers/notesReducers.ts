
export interface INotesState {
    notes: INotes[]
}
export interface INotes {
    _id?: any;
    title: string;
    todolist: Array<any>
}

interface IState {
    notes: INotes[],
    activeNote: INotes | null
}

const initialState = {
    notes: [],
    activeNote: null
}

type Action = { type: 'Add_note', payload: string } 
            | { type: 'Set_active_note', payload: INotes }
            | { type: 'Update_note', payload: INotes }
            | {type: 'Load_notes', payload: INotes[] };

export const notesReducer = (state: IState = initialState, action: Action) => {
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
        case 'Set_active_note':
            return {
                ...state,
                activeNote: { ...action.payload }
            }
        case 'Update_note':
            return {
                ...state,
                notes: state.notes.map( (note: any) => 
                    note._id === action.payload._id ? action.payload : note )
            }
        default: 
            return state
    } 
}