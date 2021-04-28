import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

const token = process.env.REACT_APP_TOKEN_ENV

  localStorage.setItem("id_token", JSON.stringify(token))

	function submitHandler(event) {
		event.preventDefault();

      let url = "localhost:3001"
	let headerToken = JSON.parse(localStorage.getItem("id_token"));

	console.log(headerToken)

			axios
				.get(url, {
					header: {
						Authorization: `Bearer ${headerToken}`
					}
				})
				.then((res) => {
					console.log(res.data);
        })
        .catch((error) => alert(error.message))

	}

	return (
		<div className="App">
			<div>Hi!!!!!</div>
			<button onClick={submitHandler}>GET TOKEN</button>
		</div>
	);
}

export default App;

//here is a demo comment
