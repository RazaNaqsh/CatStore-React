import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = ({ handleCartClick }) => {
	return (
		<nav className="flex justify-between py-3 px-8 z-10ZZz">
			<Link to="/">
				<h3 className="px-3 py-2">Katto Store</h3>
			</Link>
			<div className="flex space-x-10">
				<Link to="https://github.com/RazaNaqsh">
					<h3 className="px-3 py-2">Raza</h3>
				</Link>
				<CustomButton
					btnName="Cart"
					handleClick={handleCartClick}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
