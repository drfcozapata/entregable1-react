import React, { useState } from 'react';
import './App.css';
import quotes from './quotes.json';
import colors from './colors.json';
import Quotes from './components/Quotes';

function App() {
	const [quote, setQuote] = useState(
		quotes[Math.floor(Math.random() * quotes.length)]
	);

	const handleClick = () => {
		setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
	};

	return (
		<div className="App d-flex flex-column justify-content-between">
			<Quotes quote={quote} colors={colors} />
			<button onClick={handleClick}>
				<i class="fa-solid fa-shuffle"></i>
			</button>
		</div>
	);
}

export default App;
