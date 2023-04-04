import CustomButton from "../CustomButton/CustomButton";

const Cart = ({ handleCartClick, purchasedCats }) => {
	return (
		<aside className="absolute right-0 top-0 bg-[#1A1A1A] h-full w-[25vw] min-w-[250px] py-5 px-4 z-50">
			<div className="relative h-full">
				<div className="flex justify-between">
					<h1 className="text-xl lg:text-3xl font-extrabold">No cats added</h1>
					<button onClick={handleCartClick}>Close</button>
				</div>
				<div className="mt-10 flex flex-col">
					{purchasedCats.map((cat) => (
						<div key={cat.id}>
							<p>{cat.name}</p>
						</div>
					))}
				</div>
				<div className="absolute bottom-5 w-full flex justify-between">
					<p className="text-lg px-3 py-2">Total :</p>
					<CustomButton btnName="Checkout" />
				</div>
			</div>
		</aside>
	);
};

export default Cart;
