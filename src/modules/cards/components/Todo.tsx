import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { deleteToDo, setActiveNote } from "../../../actions/notes";

export const Todo = ({ initialValue, noteObj, onUpdate = () => { } }: any) => {
	
	const [todo, setTodo] = useState(initialValue);
	const dispatch = useDispatch();

	function onCheck(e: any) {
		console.log('on check: ', e);
		setTodo({ ...todo, done: Boolean(e.target.checked) });
	}

	const handleDeleteNote = ( itemToDelete: any ) => {

		
		dispatch(deleteToDo(itemToDelete));
		dispatch(setActiveNote(noteObj));

	}

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
							onChange={onCheck}
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
					onClick={ () => {handleDeleteNote(todo)} }
				>
					<i className="bi bi-x"></i>
				</button>
			</div>
		</div>
	);
}
