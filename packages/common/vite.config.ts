import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [dts()],
	build: {
		lib: {
			entry: "src/main.ts",
			formats: ["es"],
			fileName: "common",
		},
	},
	test: {
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: ["node_modules/"],
		},
	},
});
