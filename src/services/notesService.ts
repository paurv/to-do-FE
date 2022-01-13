
class NotesService {
    getNote = () => {
        let dataNotes;
        fetch('http://localhost:8888/notes')
        .then( res => res.json())
        .then((data) => {
            dataNotes = data
        })
        .catch(console.log);
        return dataNotes
    }
}

export default NotesService;