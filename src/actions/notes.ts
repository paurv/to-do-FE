import { fetchToken } from '../helpers/fetch';
import { IToDo } from '../modules/cards/components/Note';
import { INotes } from '../reducers/notesReducers';

export const startLoadingNotes = () => {
    return async (dispatch: any) => {
        try {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWUwY2QzMDUwNGNmNDcwZTEyODk4ZTQiLCJpYXQiOjE2NDI2NDU4MjgsImV4cCI6MTY0MjczMjIyOH0.XNATlWP1wVuvbYIjxPibB6P0CLIpoXIrBuViLdJ5U0k');
            const uid = '61e0cd30504cf470e12898e4';
            const res: any  = await fetchToken(`notes/${uid}`);
            const body: any = await res.json();
            
            if (body.ok) {
                dispatch({ type: 'Load_notes', payload: body.data })
            } else {                                                    // eslint-disable-next-line no-throw-literal
                throw 'hubo un error :c';
            }
        } catch (e) {
            console.log('Error getting notes data: ', e);
        }
    }
}

// set active note
export const setActiveNote = (note: any) => ({ type: 'Set_active_note', payload: note });

// start updating note
export const startUpdatingNote = (note: any) => {
    return async(dispatch: any) => {
        try {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWUwY2QzMDUwNGNmNDcwZTEyODk4ZTQiLCJpYXQiOjE2NDI2NDU4MjgsImV4cCI6MTY0MjczMjIyOH0.XNATlWP1wVuvbYIjxPibB6P0CLIpoXIrBuViLdJ5U0k');
            const res: any = await fetchToken(`notes/${ note._id }`, { ...note }, 'PUT');
            const body: any = await res.json();

            if (body['ok']) {
                dispatch({ type: 'Update_note', payload: body.data });
            } else {
                throw 'Hubo un error :c';                                // eslint-disable-line no-throw-literal
            }

        } catch (e) {
            console.log('Error getting notes data: ', e);
        }
    }
}

// add to do's of notes
export const startAddingToDo = ( todo: IToDo ) => {
    
    return async ( dispatch: any, getState: any ) => {

        const { activeNote } = getState().notes;
        const updateNote: INotes = {
            ...activeNote,
            todolist: [ ...activeNote.todolist, todo ]
        }
        
        dispatch( startUpdatingNote(updateNote) );

    }
}

// delete to do's of notes
export const deleteToDo = ( todoItem: any ) => {
    return async ( dispatch: any, getState: any ) => {

        
        const { activeNote } = getState().notes;
        
        activeNote.todolist.forEach((element: any, idx: any) => {
            if ( element._id === todoItem._id ) {
                activeNote.todolist.splice(idx, 1);
            }
        });
        
        console.log('id item a eliminar: ', todoItem);
        console.log('lista: ', activeNote);
        

        const updateNote: INotes = {
            ...activeNote,
            todolist: [ ...activeNote.todolist ]
        }
        // console.log('se ejecuta el delete', updateNote);
        dispatch( startUpdatingNote(updateNote) );
        
    }
}
