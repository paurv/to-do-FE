import React from 'react';
import ReactDOM from 'react-dom';
// // import reportWebVitals from './reportWebVitals';
import { ToDoApp } from './ToDoApp';
import { Provider } from 'react-redux';
import { store } from './services/store';

// css
import './index.css';

const divRoot = document.getElementById('root');

ReactDOM.render(

	<React.StrictMode>
		<Provider store={ store }>
			<ToDoApp />
		</Provider>
	</React.StrictMode>, divRoot

);

// // reportWebVitals();
