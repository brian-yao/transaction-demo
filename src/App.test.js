import { act, renderHook } from "@testing-library/react";
// import App from "./App";
import useUsers from "./useUsers";
import { userApi } from "./userApi";

jest.mock("./userApi");

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
