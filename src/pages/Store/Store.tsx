import "./Store.scss";
import catsData from "../../utils/catsData.js";
import CustomButton from "../../components/CustomButton/CustomButton";
const Store = () => {
	const cats = catsData.map((cat) => (
		<div className="relative w-fit">
			<h1>{cat.name}</h1>
			<img
				src={cat.src}
				alt="cat"
				className="h-[250px] w-[400px] object-cover"
			/>
			<CustomButton
				btnName="Buy"
				customStyle="absolute bottom-5 left-0 right-0 bg-red-500 hover:bg-red-600"
			/>
		</div>
	));
	return (
		<main>
			<div className="p-4">
				<h1>Browse Your Cats here</h1>
				<section className="p-8">
					<div className="flex flex-wrap justify-evenly">{cats}</div>
				</section>
			</div>
		</main>
	);
};

export default Store;
