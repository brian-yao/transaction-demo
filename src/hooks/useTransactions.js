import { useState } from "react";
import { transactionApi } from "../utils/userApi";

const useTransactions = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setError] = useState(false);

	const getTransactions = async () => {
		try {
			setIsLoading(true);
			return await transactionApi();
		} catch (err) {
			console.log(err);
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return [getTransactions, isLoading, isError];
};

export default useTransactions;