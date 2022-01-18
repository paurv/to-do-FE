import { Todo } from "./Todo";
import { SetStateAction, useState } from "react";

export const Notes = ({ note }: any) => {
	const [list, setlist] = useState(note.todolist);
	const [description, setDescription] = useState('');

	function handleChange(event: { target: { value: SetStateAction<string> } }) {
		console.log(event.target.value);
		setDescription(event.target.value);
	}

	function handleAdd() {
		let listClone = [...list];
		const newData = { desc: description, done: false };
		listClone.push(newData);
		setlist(listClone);
		
		setDescription('');

		// Actualizar render
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
										initialValue={todo}
										key={idxToDo}
									// onUpdate={(todo: any) => {
									//   console.log(todo);
									// }}
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
										onClick={ handleAdd }
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
