import users from "./users.json";

export const userApi = () => {
	return new Promise((resolve) => {
		resolve(users);
	});
};
