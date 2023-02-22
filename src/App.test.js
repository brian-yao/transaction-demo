import { act, renderHook } from "@testing-library/react";
// import App from "./App";
import useUsers from "./hooks/useUsers";
import { userApi } from "./utils/userApi";

jest.mock("./utils/userApi");

describe("useUsers", () => {
	it("result", async () => {
		userApi.mockResolvedValueOnce([{}]);

		const { result } = renderHook(() => useUsers());
		await act(async () => {
			await result.current[0]();
		});

		expect(userApi).toHaveBeenCalledTimes;
	});
});
