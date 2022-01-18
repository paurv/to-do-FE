import { fetchToken } from '../helpers/fetch';

export const startLoadingNotes = () => {
    return async (dispatch: any) => {
        try {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MWUwY2QzMDUwNGNmNDcwZTEyODk4ZTQiLCJpYXQiOjE2NDI0OTM0MjMsImV4cCI6MTY0MjU3OTgyM30.ArDPlyKZIS0fRIqmcbUnUOg8ewdY3zsYaSWylC5E6ZM');
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