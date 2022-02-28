import React from 'react';

const QuoteBox = ({ quote }) => {
	return (
		<>
			<h3 className="mb-3">
				<i className="fa-solid fa-quote-left"></i> {quote.quote}{' '}
				<i className="fa-solid fa-quote-right"></i>
			</h3>
			<p>− {quote.author}</p>
		</>
	);
};

export default QuoteBox;
