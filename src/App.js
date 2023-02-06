import React, { useEffect, useState, useRef } from "react";
import useUsers from "./useUsers";

function App() {
	const [users, setUsers] = useState([]);

	const [getUsers, isLoading] = useUsers();
	const getUsersRef = useRef(() => getUsers());

	const calculatePointTotal = (points) => {
		// 10, 120, 200
		let twopts = points > 100 ? (points - 100) * 2 : 0;
		let onept = points > 50 ? (100 - (points % 100)) * 1 : 0;
		const total = twopts + onept;
		return total;
	};

	useEffect(() => {
		const callApi = async () => {
			const response = await getUsersRef.current();
			setUsers(response);
		};
		callApi();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Users</h1>
				{isLoading && "loading"}
				<ul>
					{users.map((user, id) => (
						<li key={id}>
							<p>{user.name}</p>
							<span>Total Points = {calculatePointTotal(user.totalSpent)}</span>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
