import React, { useState } from "react";

export const Todo = ({ initialValue, onUpdate = () => { } }: any) => {
	const [todo, setTodo] = useState(initialValue);
	function onCheck(e: any) {
		// Call API
		// OK 200
		// Update state local
		setTodo({ ...todo, done: Boolean(e.target.checked) });
	}

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
				<button type="button" className="btn btn-light btn-sm">
					<i className="bi bi-x"></i>
				</button>
			</div>
		</div>
	);
}
