import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Store from "./pages/Store/Store";
import { useState } from "react";

// import catBg from "./assets/bg/catLookingAtButterfly.mp4";
import cat from "./assets/bg/catFace.jpg";
import "./App.scss";
import Cart from "./components/Cart/Cart";
import catsData from "./utils/catsData.js";

const App = () => {
	const [cartWindow, setCartWindow] = useState(false);
	const [cats, setCats] = useState(catsData);
	const [purchasedCats, setPurchasedCats] = useState([]);

	const toggleCart = () => {
		setCartWindow((prev) => !prev);
	};
	return (
		<div className="bg-[#0F1011] min-h-[100vh] h-full">
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
			{/* <img
				src={cat}
				alt=""
				className="screenBg"
			/> */}
			<Navbar
				handleCartClick={toggleCart}
				purchasedCats={purchasedCats}
			/>
			{cartWindow && (
				<Cart
					handleCartClick={toggleCart}
					purchasedCats={purchasedCats}
				/>
			)}
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/store"
					element={
						<Store
							cats={cats}
							setCats={setCats}
							purchasedCats={purchasedCats}
							setPurchasedCats={setPurchasedCats}
						/>
					}
				/>
			</Routes>
		</div>
	);
};

export default App;
