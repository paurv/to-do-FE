import React from 'react'
import 'animate.css';
import { useDispatch } from 'react-redux';
import { startAddingNote } from '../../../actions/notes';
import { useState, SetStateAction } from 'react';

export const Modal = ({ handleClose, show, children }: any, onClose = () => { }) => {
    const dispatch = useDispatch();
    const [noteTitle, setnoteTitle] = useState('');
    let showHideClassName = show ? "modal display-block animate__animated animate__fadeIn" : "modal display-none animate__animated animate__fadeOut";

    
    function handleChange(event: { target: { value: SetStateAction<string> } }) {
		setnoteTitle(event.target.value);
	}

    const handleSave = () => {
        if (noteTitle === '') return;
        const data = {
            title: noteTitle,
            todolist: []
        }
        dispatch(startAddingNote(data));
        handleClose();
        setnoteTitle('');
    }

    return (
        <div className={showHideClassName} >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">New Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body text-dark">
                            <div className="mb-3 row">
                                <div className="col-sm-12">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        id="staticEmail" 
                                        placeholder="Note title"
                                        value={ noteTitle }
                                        onChange={ handleChange }
                                    >
                                    </input>
                                </div>
                            </div>
                        {/* <div>
                        </div> */}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ handleClose }>Close</button>
                        <button type="button" className="btn btn-primary" onClick={ handleSave }>Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
