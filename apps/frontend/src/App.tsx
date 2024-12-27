import { hello, isBlank } from "common";

const App = () => {
	return (
		<div>
			<h1>{hello()}</h1>
			<h2>Use common package</h2>
			<p>undefined isBlank - {isBlank(undefined) ? "true" : "false"}</p>
			<p>false isBlank - {isBlank(false) ? "true" : "false"}</p>
			<p>true isBlank - {isBlank(true) ? "true" : "false"}</p>
			<p>Empty object isBlank - {isBlank({}) ? "true" : "false"}</p>
		</div>
	);
};

export default App;
