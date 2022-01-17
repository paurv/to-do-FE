import { fetchToken } from '../helpers/fetch';

export const startLoadingNotes = () => {
    return async (dispatch: any) => {
        try {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWUwY2QzMDUwNGNmNDcwZTEyODk4ZTQiLCJpYXQiOjE2NDIzODc1MzYsImV4cCI6MTY0MjQ3MzkzNn0.2O3CV007-_SJADCUpgIwA5ypea_nk2wmDZdr7P0Rp0M');
            const uid = '61e0cd30504cf470e12898e4';
            const res: any = await fetchToken(`notes/${uid}`);
            const body: any = await res.json();
            console.log('resTwo: ', body);
            
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