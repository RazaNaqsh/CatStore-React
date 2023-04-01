import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Store from "./pages/Store/Store";

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/store"
					element={<Store />}
				/>
			</Routes>
		</div>
	);
};

export default App;
