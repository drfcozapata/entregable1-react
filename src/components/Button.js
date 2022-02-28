import React from 'react';

const Button = ({ handleClick, color }) => {
	return (
		<button style={{ color: color }} onClick={handleClick}>
			<i className="fa-solid fa-shuffle"></i>
		</button>
	);
};

export default Button;
