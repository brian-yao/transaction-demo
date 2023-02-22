import React, { useRef, useState, useEffect } from "react";
import useTransactions from "../hooks/useTransactions";
import { useLocation } from "react-router-dom";
import UserDetail from "./UserDetail";

const User = () => {
	const location = useLocation();
	const userID = location.pathname.split("/")[2];
	const [transactions, setTransactions] = useState([]);
	const [name, setName] = useState("");
	const [getTransactions] = useTransactions();
	const getTransactionsRef = useRef(() => getTransactions());

	useEffect(() => {
		const callApi = async () => {
			const response = await getTransactionsRef.current();
			setTransactions(response);
		};
		callApi().then(() => {
			console.log(transactions);
			try {
				const transaction = transactions.find((item) => item.customerID.toString() === userID);
				setName(transaction.name);
			} catch (err) {
				console.log(err);
			}
		});
	}, [transactions, userID]);

	return <>{name && <UserDetail transactions={transactions} name={name}></UserDetail>}</>;
};

export default User;
