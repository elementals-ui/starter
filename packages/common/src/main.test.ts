import { describe, expect, it } from "vitest";
import { hello } from "./main";

describe("hello", () => {
	it("returns hello", () => {
		expect(hello()).toBe("Hello World");
	});
});
