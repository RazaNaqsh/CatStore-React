import CustomButton from "../CustomButton/CustomButton";

const Cart = ({ handleCartClick }) => {
	return (
		<aside className="absolute right-0 top-0 bg-[#1A1A1A] h-full w-[25vw] min-w-[250px] py-5 px-4">
			<div className="flex flex-col h-full justify-between">
				<div className="flex justify-between">
					<h1 className="text-xl lg:text-3xl font-extrabold">No cats added</h1>
					<button onClick={handleCartClick}>Close</button>
				</div>
				<div className="flex justify-between">
					<p className="text-lg">Total :</p>
					<CustomButton btnName="Checkout" />
				</div>
			</div>
		</aside>
	);
};

export default Cart;
