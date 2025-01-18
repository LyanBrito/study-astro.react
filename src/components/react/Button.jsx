const Button = ({ children }) => {
	function handleOnCLick() {
		alert("ALALA");
	}
	return (
		<button type="button" onClick={handleOnCLick}>
			{children}
		</button>
	);
};

export default Button;
