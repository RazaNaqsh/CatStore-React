import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Store from "./pages/Store/Store";
import { useState } from "react";

// import catBg from "./assets/bg/catLookingAtButterfly.mp4";
import cat from "./assets/bg/catFace.jpg";
import "./App.scss";
import Cart from "./components/Cart/Cart";

const App = () => {
	const [cartWindow, setCartWindow] = useState(false);
	const toggleCart = () => {
		setCartWindow((prev) => !prev);
	};
	return (
		<div>
			{/* <video
				className="videoBg"
				autoPlay
				loop
				muted
			>
				<source
					src={catBg}
					type="video/mp4"
				/>
			</video> */}
			<img
				src={cat}
				alt=""
				className="screenBg"
			/>
			<Navbar handleCartClick={toggleCart} />
			{cartWindow && <Cart handleCartClick={toggleCart} />}
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
