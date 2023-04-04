import "./Store.scss";

const Store = ({ cats, setCats, purchasedCats, setPurchasedCats }) => {
	const purchaseClick = (id: string) => {
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
				{cat.isSold ? "Bought" : "Purchase"}
			</button>
		</div>
	));
	return (
		<main>
			<div className="p-4">
				<h1>Browse Your Cats here</h1>
				<section className="p-8">
					<div className="flex flex-wrap justify-evenly">{catsElement}</div>
				</section>
			</div>
		</main>
	);
};

export default Store;
