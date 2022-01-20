import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteToDo, setActiveNote, updateCheck, startLoadingNotes } from '../../../actions/notes';
import { useEffect } from 'react';

export const Todo = ({ initialValue, noteObj, selectedItem, onUpdate = () => { } }: any) => {
	
	const [todo, setTodo] = useState(initialValue);
	const dispatch = useDispatch();

	
	function handleCheck(e: { target: { checked: any; }; }) {
		setTodo({ ...todo, done: Boolean(e.target.checked) });
		dispatch(setActiveNote(noteObj));
		dispatch(updateCheck(selectedItem))
	}
	
	const handleDeleteNote = () => {		
		dispatch(setActiveNote(noteObj));
		dispatch(deleteToDo(selectedItem));
	}
	
	useEffect(() => {
		dispatch(startLoadingNotes());
	}, [dispatch]);
	
	// usar use selector
	return (
		<div className="d-flex flex-row">
			<div className="me-auto d-flex">
				<label className="list-group-item d-inline-flex">
					<div className="flex-shrink-1">
						<input
							className="form-check-input me-1"
							type="checkbox"
							value={todo.done.toString()}
							checked={todo.done}
							onChange={ handleCheck }
						/>
					</div>
					<div
						className={'flex-grow-1 text-wrap wrap-todo ' + (todo.done === true ? "text-decoration-line-through" : "")}
					>
						{todo.desc}
					</div>
				</label>
			</div>
			<div className="center-btn">
				<button 
					type="button" 
					className="btn btn-light btn-sm"
					onClick={ handleDeleteNote }
				>
					<i className="bi bi-x"></i>
				</button>
			</div>
		</div>
	);
}
