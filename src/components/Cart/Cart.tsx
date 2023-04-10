import CustomButton from "../CustomButton/CustomButton";

const Cart = ({ handleCartClick, purchasedCats }) => {
	const totalPrice = purchasedCats.reduce((acc, cat) => (acc += cat.price), 0);
	return (
		<aside className="absolute right-0 top-0 bg-[#1A1A1A] h-full w-[25vw] min-w-[250px] py-5 px-4 z-50">
			<div className="relative h-full">
				<div className="flex justify-between">
					<h1 className="text-xl font-extrabold lg:text-3xl">No cats added</h1>
					<button onClick={handleCartClick}>Close</button>
				</div>
				<div className="flex flex-col mt-10">
					{purchasedCats.map((cat) => (
						<div
							key={cat.id}
							className="flex justify-between"
						>
							<p>{cat.name}</p>
							<p>${cat.price}</p>
						</div>
					))}
				</div>
				<div className="absolute flex justify-between w-full bottom-5">
					<p className="px-3 py-2 text-lg">Total : {totalPrice} $</p>
					<CustomButton btnName="Checkout" />
				</div>
			</div>
		</aside>
	);
};

export default Cart;
