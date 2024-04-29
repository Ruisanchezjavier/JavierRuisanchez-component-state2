import React, { useState } from "react";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [userImput, setUserImput] = useState('');

      function handleClick() {
		setCounter(counter => counter + 5);
		
	  }


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Count: {counter}</h1>
			<button onClick={() => {
				handleClick();
				handleClick();
				handleClick();
			}}>
				Add 15
			</button>
			<div>
				<h1>You name is {userImput ? userImput :  " NULL"}</h1>
			</div>
			<div>
				<input
				type="text"
				value={userImput}
				placeholder="Enter first name"
				onChange={e => setUserImput(e.target.value)}
				/>
			</div>
		</div>

	);
};

export default Home;
