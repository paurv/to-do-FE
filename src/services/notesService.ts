
class NotesService {
    getNote = (token: string) => {
        const requestOptions: RequestInit = {
            method: 'GET',
            headers: { 'Authorization': token }
        };
        let dataNotes;
        fetch('http://localhost:8888/notes', requestOptions)
        .then( res => res.json())
        .then((data) => {
            console.log('get notes data: ', data);
            
            dataNotes = data
        })
        .catch(console.log);
        return dataNotes
    }
}

export default NotesService;