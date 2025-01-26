import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
	// @ts-ignore
	plugins: [react()],
	base: process.env.GITHUB_PAGES // Set base URL for GitHub Pages
		? "/starter/" // Replace with your actual repository name
		: "/",
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./src/test/setup.ts"],
		coverage: {
			provider: "v8",
			reporter: ["text", "json", "html"],
			exclude: ["node_modules/", "src/test/setup.ts"],
		},
	},
});
