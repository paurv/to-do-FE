import { Todo } from "./Todo";

export const Notes = ({ note }: any) => {
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
						<input type="text" className="form-control mt-1" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Add item" />
					</div>
				</div>
			</div>
		</div>
	);
}
