const CustomButton = (props) => {
	const { btnName, btnIcon, handleClick } = props;
	return (
		<button
			className="px-3 py-2"
			onClick={handleClick}
		>
			{btnName}
		</button>
	);
};

export default CustomButton;
