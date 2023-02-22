import { useState } from "react";
import { userApi } from "../utils/userApi";

const useUsers = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setError] = useState(false);

	const getUsers = async () => {
		try { 
			setIsLoading(true);
			return await userApi();
		} catch (err) {
			console.log(err);
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return [getUsers, isLoading, isError];
};

export default useUsers;
