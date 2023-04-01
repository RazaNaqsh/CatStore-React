import CustomButton from "../CustomButton/CustomButton";

const Navbar = ({ handleCartClick }) => {
	const cardToggle = () => {
		// toggle cartWindow
	};
	return (
		<nav className="flex justify-between py-3 px-8 z-10ZZz">
			<div>
				<CustomButton btnName="Game Store" />
			</div>
			<div className="space-x-10">
				<CustomButton
					btnName="Raza"
					handleClick={{}}
				/>
				<CustomButton
					btnName="Cart"
					handleClick={handleCartClick}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
