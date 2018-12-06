// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
// Create a react component

const App = () => {	
	return (
	<div>
  		<label class="label" for="name">Enter name:</label>
  		<input id="name" type="text" />
  		<button style={{ backgroundColor: 'red', border: '4px solid' }}>Submit</button>
	</div>
	);

};

ReactDOM.render( <App />, document.querySelector('#root'));



