import React, { useState, useEffect } from 'react';
import logo from './assets/logo.jpg';
import { Search } from './Search/Search';
import { SearchBar } from './Search/SearchBar';
import { Compare } from './Compare/Compare';
import { CompareBar } from './Compare/CompareBar';
import * as Styled from './styled';

function App() {
	const [search, setSearch] = useState("Ironman"); // Text to search for
	const [searchData, setSearchData] = useState([]); // Data returned from search query

	const [compare1, setCompare1] = useState("Batman"); // First text to compare
	const [compare2, setCompare2] = useState("Superman"); // Second text to compare
	const [compareData1, setCompareData1] = useState([]); // Data returned from first compare query
	const [compareData2, setCompareData2] = useState([]); // Data returned from second compare query

	const [showLogo, setShowLogo] = useState(true); // Determines whether or not we show the main logo
	const [isCompare, setIsCompare] = useState(false); // Determines which type of data we are showing
	const [compareFocus, setCompareFocus] = useState(false); // Determines which search/compare bar is in focus

	// This hook acts like a componentDidMount function
	// And the return function acts like a componentDidUnmount function
	// Both of these are used to listen for a keyup action from the user
	useEffect(() => {
		document.addEventListener("keyup", onEnterPress, false);
		return function cleanup() {
			document.removeEventListener("keyup", onEnterPress, false);
		};
	});

	// Handles a keyup event, looking for the user to hit enter
	// When the user hits enter we run the API call for whichever search/compare bar is in focus
	const onEnterPress = (event) => {
		if (event.keyCode === 13) {
			if (compareFocus) {
				APICompare();
			} else {
				APISearch();
			}
		}
	}

	// The API call for the search bar
	// Takes the text input into the search bar and searches for that superhero
	// Then it take the data returned from the query and places it in the "data" state
	const APISearch = () => {
		fetch(
			`https://superheroapi.com/api.php/1711939795607990/search/${search}`,
		)
		.then(response => response.json())
		.then(data => setSearchData(data))
		.catch(error => console.log(error));

		// The above functions aren't instantaneous, so while we wait we let the user know that we're loading
		setSearchData("Loading...");
		// When data is ready to be shown we don't want to show the main logo
		setShowLogo(false);
		// The data we want to show is Search data not Compare data
		setIsCompare(false);
	};

	// The API call for the compare bar
	// Takes the text input into the compare bar and searches for those superheroes
	// Then it take the data returned from each query and places it in the "compareData1" and "compareData2" states
	const APICompare = () => {
		fetch(
			`https://superheroapi.com/api.php/1711939795607990/search/${compare1}`,
		)
		.then(response => response.json())
		.then(data => setCompareData1(data))
		.catch(error => console.log(error));

		fetch(
			`https://superheroapi.com/api.php/1711939795607990/search/${compare2}`,
		)
		.then(response => response.json())
		.then(data => setCompareData2(data))
		.catch(error => console.log(error));

		// The above functions aren't instantaneous, so while we wait we let the user know that we're loading
		setCompareData1("Loading...");
		setCompareData2("Loading...");
		// When data is ready to be shown we don't want to show the main logo
		setShowLogo(false);
		// The data we want to show is Search data not Compare data
		setIsCompare(true);
	};

	// TODO: This is the function to put the Twitter's post tweet API call
	// The data being passed in here the the fully formatted tweet that we want to post
	const onTweet = (data) => {
		console.log(data);
	}

	// This function clears the data in all of our data fields, then shows the main logo
	// It essentially takes us back to the home screen
	const clear = () => {
		setSearchData([]);
		setCompareData1([]);
		setCompareData2([]);
		setShowLogo(true);
	};

	return (
		<Styled.Header>
			{/* Decides whether or not to show the main logo */}
			{showLogo && <Styled.Logo src={logo} alt="Marvel logo" />}
			<SearchBar
				onClick={() => APISearch()}
				onClear={() => clear()}
				// If the user deletes what they've typed in the input, the default text is "Ironman"
				onChange={event => setSearch(event.target.value === "" ? "Ironman" : event.target.value)}
				onFocus={() => setCompareFocus(false)}
				label="Search for a character in the Marvel or DC Universes:"
				placeholder="Ironman"
			/>
			<CompareBar 
				onClick={() => APICompare()}
				onClear={() => clear()}
				// If the user deletes what they've typed in either of the inputs, the default text is "Batman" and "Superman"
				onChange1={event => setCompare1(event.target.value === "" ? "Batman" : event.target.value)}
				onChange2={event => setCompare2(event.target.value === "" ? "Superman" : event.target.value)}
				onFocus={() => setCompareFocus(true)}
				labelLeft="Compare two characters:"
				labelBetween="and"
				placeholder1="Batman"
				placeholder2="Superman"
			/>
			{/* Decides which type of data we will show */}
			{isCompare ? 
				<Compare data1={compareData1} data2={compareData2} onTweet={onTweet} />
				: <Search data={searchData} onTweet={onTweet} compare={false} />}
		</Styled.Header>
	);
}

export default App;
