import NavButton from "../NavButton/NavButton";

const Navbar = () => {
	return (
		<nav className="flex justify-between py-3 px-8">
			<div>
				<NavButton btnName="Game Store" />
			</div>
			<div className="space-x-10">
				<NavButton btnName="Raza" />
				<NavButton btnName="Cart" />
			</div>
		</nav>
	);
};

export default Navbar;
