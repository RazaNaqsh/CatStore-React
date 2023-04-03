const CustomButton = (props) => {
	const { btnName, btnIcon, handleClick, customStyle } = props;
	return (
		<button
			className={`px-3 py-2 ${customStyle}`}
			onClick={handleClick}
		>
			{btnName}
		</button>
	);
};

export default CustomButton;
