import users from "../data/users.json";
import transactions from "../data/transactions.json";

export const userApi = () => {
	return new Promise((resolve) => {
		resolve(users);
	});
};

export const transactionApi = () => {
	return new Promise((resolve) => {
		resolve(transactions);
	});
};
