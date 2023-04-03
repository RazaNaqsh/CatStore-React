import "./Store.scss";
import catsData from "../../utils/catsData.js";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useState } from "react";
const Store = () => {
	const [cats, setCats] = useState(catsData);
	const [purchasedCats, setPurchasedCats] = useState([]);

	const purchaseClick = (id: string) => {
		// find which element in cats should go inside the
		// const clickedCat = cats.filter((cat) => cat.id === id);
		cats.forEach((cat) => {
			if (cat.id === id && cat.isSold === false) {
				setPurchasedCats((prev) => [...prev, cat]);
				setCats((prevCats) =>
					prevCats.map((cat) =>
						cat.id === id ? { ...cat, isSold: true } : cat
					)
				);
			}
		});
		console.log(purchasedCats);
		// setPurchasedCats(prev => ([...prev, ]))
	};
	const catsElement = cats.map((cat) => (
		<div
			className="relative w-fit"
			key={cat.id}
		>
			<h1>{cat.name}</h1>
			<img
				src={cat.src}
				alt="cat"
				className="h-[250px] w-[400px] object-cover"
			/>
			<button
				className="absolute bottom-5 left-0 right-0 bg-red-500 hover:bg-red-600"
				onClick={() => purchaseClick(cat.id)}
			>
				Purchase
			</button>
		</div>
	));
	return (
		<main>
			<div className="p-4">
				<h1>Browse Your CatElementsCatElements here</h1>
				<section className="p-8">
					<div className="flex flex-wrap justify-evenly">{catsElement}</div>
				</section>
			</div>
		</main>
	);
};

export default Store;
