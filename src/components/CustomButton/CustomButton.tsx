const CustomButton = (props) => {
	const { btnName, btnIcon, handleClick } = props;
	return (
		<button
			className=""
			onClick={handleClick}
		>
			{btnName}
		</button>
	);
};

export default CustomButton;
