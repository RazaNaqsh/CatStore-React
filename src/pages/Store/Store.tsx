import "./Store.scss";
import catsData from "../../utils/catsData.js";
const Store = () => {
	const cats = catsData.map((cat) => (
		<div>
			<h1>{cat.name}</h1>
			<img
				src={cat.src}
				alt="cat"
				className="h-[250px] w-[400px] object-cover"
			/>
		</div>
	));
	return (
		<main>
			<div className="p-4">
				<h1>Browse Your Cats here</h1>
				<section className="p-8">{cats}</section>
			</div>
		</main>
	);
};

export default Store;
