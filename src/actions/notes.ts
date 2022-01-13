import { fetchData } from '../helpers/fetch';

export const startLoadingNotes = () => {
    return async (dispatch: any) => {
        try {
            const res: any = await fetchData('notes');
            
            const body: any = await res.json();
            if (body.ok) {
                dispatch({ type: 'Load_notes', payload: body.data })
            } else {
                // eslint-disable-next-line no-throw-literal
                throw 'hubo un error :c';
            }
        } catch (e) {
            console.log('Error getting notes data: ', e);
        }
    }
}