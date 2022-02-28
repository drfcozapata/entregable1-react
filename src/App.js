import React, { useState } from 'react';
import './App.css';
import quotes from './quotes.json';
import colors from './colors.json';
import QuoteBox from './components/QuoteBox';
import Button from './components/Button';

function App() {
	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundImage = randomColor.backgr;
	document.body.style.color = randomColor.color;

	const [quote, setQuote] = useState(
		quotes[Math.floor(Math.random() * quotes.length)]
	);

	const handleClick = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	};

	return (
		<div className="App d-flex flex-column justify-content-between">
			<QuoteBox quote={quote} />
			<Button handleClick={handleClick} color={randomColor.color} />
		</div>
	);
}

export default App;
