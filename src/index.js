import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card.js';
import {robots} from './robots.js'; // When importing only one const, it should be wrapped in curly brackets //
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/> {/* The id, name, and email are taken from the object in robots.js*/}
		<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/> {/* In JSX (the JavaScript in React.js) JavaScript expressions are written using curly brackets */}
		<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
	</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
