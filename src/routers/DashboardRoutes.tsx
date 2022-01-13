import { Route, Routes } from 'react-router-dom';

// Components
import { Navbar } from "../modules/ui/Navbar";
import { CardsList } from '../modules/cards/CardsList';

export const DashboardRoutes = () => {

	return (
		<>
			<Navbar />
			<div className='container dashboard-top'>
				<Routes>
					<Route path="card" element={<CardsList />} />
					<Route path="/" element={<CardsList />} />
				</Routes>
			</div>
		</>
	)
}
