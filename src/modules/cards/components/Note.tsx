import { Todo } from "./Todo";
import { SetStateAction, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote, startAddingToDo } from "../../../actions/notes";
import { INotes } from '../../../reducers/notesReducers';

export interface IToDo {
	desc: string;
	done: boolean;
}

export const Notes = ({ note }: { note: INotes }) => {
	
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	function handleChange(event: { target: { value: SetStateAction<string> } }) {
		setDescription(event.target.value);
	}

	const handleAdd = ( description: string, note: any ) => {

		if ( description === '' ) { return }
		dispatch(setActiveNote(note));
		const newData = { desc: description, done: false };
		dispatch(startAddingToDo(newData));
		
		setDescription('');

	}

	return (
		<div>
			<div className="card-component">
				<div className="card border-white">
					<div className="card-body">
						<div className="card-title d-flex">
							<div className="title me-auto">
								<h3 className="card-title td-cards" style={{ color: "black" }}>
									{note.title}
								</h3>
							</div>
							<div className="action">
								<button type="button" className="px-2 btn btn-light btn-sm">
									<i className="bi bi-three-dots"></i>
								</button>
							</div>
						</div>
						<div className="card-cont">
							<div className="list-group">
								{note.todolist.map((todo: any, idxToDo: number) => (
									<Todo
										initialValue={ todo }
										noteObj={ note }
										toDelete={ todo }
										key={ idxToDo }
									/>
								))}
							</div>
						</div>
						<div>
							<div className="d-flex flex-row align-items-baseline">
							  	<div className="flex-fill" style={{ marginRight: "6px" }}>
									<input 
										type="text" 
										className="form-control form-control-sm mt-1" 
										aria-describedby="inputGroup-sizing-sm" 
										placeholder="Add item" 
										value={ description } 
										onChange={ handleChange }
									/>
							  	</div>
							  	<div className="flex-fill">
									<button 
										type="button" 
										className="btn btn-primary btn-sm" 
										onClick={ () => {handleAdd(description, note)} }
									>
										Add
									</button>
							  	</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
