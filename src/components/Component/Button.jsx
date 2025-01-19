// utilizando o nome Button.jsx apenas para exemplo da estrutura do projeto

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
