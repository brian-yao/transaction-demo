import React, { useEffect, useState, useRef } from "react";
import useUsers from "./hooks/useUsers";
import { Link } from "react-router-dom";

function App() {
	const [users, setUsers] = useState([]);

	const [getUsers, isLoading] = useUsers();
	const getUsersRef = useRef(() => getUsers());

	const calculatePointTotal = (points) => {
		// 10, 120, 200
		let twoPt = points > 100 ? (points - 100) * 2 : 0;
		let onePt = points > 50 ? (100 - (points % 100)) * 1 : 0;
		const total = twoPt + onePt;
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
					{users.map((user) => (
						<li key={user.id}>
							<Link to={`user/${user.id}`} state={{ name: "hello" }}>
								{user.name}
							</Link>
							<span>Total Points = {calculatePointTotal(user.totalSpent)}</span>
						</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
