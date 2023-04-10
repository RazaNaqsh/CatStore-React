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
			} else if (cat.id == id && cat.isSold === true) {
				setPurchasedCats((prev) => prev.filter((cat) => cat.id !== id));
				setCats((prevCats) =>
					prevCats.map((cat) =>
						cat.id === id ? { ...cat, isSold: false } : cat
					)
				);
			}
		});
		console.log(purchasedCats);
	};
	const catsElement = cats.map((cat) => (
		<div
			className="relative w-fit bg-[#2C2C2C] rounded-md overflow-hidden"
			key={cat.id}
		>
			<img
				src={cat.src}
				alt="cat"
				className="h-[250px] w-[400px] object-cover"
			/>
			<div className="flex items-center justify-between pr-4">
				{/* text-[#94a3b8] this was the color of add to cart button*/}
				<button
					className={`  hover:text-[#9922FF] ${
						cat.isSold ? "text-red-400" : "text-green-400"
					}`}
					onClick={() => purchaseClick(cat.id)}
				>
					{cat.isSold ? "Remove -" : "Add to cart +"}
				</button>
				<p>${cat.price}</p>
			</div>
			<h1 className="px-4 pt-1 pb-3">{cat.name}</h1>
		</div>
		// absolute bottom-5 left-0 right-0
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
