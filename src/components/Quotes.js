import React from 'react';

const Quotes = ({ quote, colors }) => {
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundImage = randomColor.backgr;
	document.body.style.color = randomColor.color;

	return (
		<div className="app">
			<h3 className="mb-3">
				<i class="fa-solid fa-quote-left"></i> {quote.quote}{' '}
				<i class="fa-solid fa-quote-right"></i>
			</h3>
			<p>− {quote.author}</p>
		</div>
	);
};

export default Quotes;
