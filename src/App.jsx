import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import { Search } from './Search/Search';
import { SearchBar } from './Search/SearchBar';
import { Compare } from './Compare/Compare';
import { CompareBar } from './Compare/CompareBar';
import * as Styled from './styled';


function App() {
	const [search, setSearch] = useState("Ironman");
	const [searchData, setSearchData] = useState([]);

	const [compare1, setCompare1] = useState("Batman");
	const [compare2, setCompare2] = useState("Superman");
	const [compareData1, setCompareData1] = useState([]);
	const [compareData2, setCompareData2] = useState([]);

	const [showLogo, setShowLogo] = useState(true);
	const [isCompare, setIsCompare] = useState(false);

	const APISearch = () => {
		fetch(
			`https://superheroapi.com/api.php/1711939795607990/search/${search}`,
		)
		.then(response => response.json())
		.then(data => setSearchData(data))
		.catch(error => console.log(error));
		setSearchData("Loading...");
		setShowLogo(false);
		setIsCompare(false);
	};

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

		setCompareData1("Loading...");
		setCompareData2("Loading...");
		setShowLogo(false);
		setIsCompare(true);
	};

	const onTweet = (data) => {
		console.log(data);
	}

	const clear = () => {
		setSearchData([]);
		setCompareData1([]);
		setCompareData2([]);
		setShowLogo(true);
	};

	return (
		<Styled.Header>
			{showLogo && <Styled.Logo src={logo} alt="Marvel logo" />}
			<SearchBar 
				onClick={() => APISearch()}
				onClear={() => clear()}
				onChange={event => setSearch(event.target.value)}
				label="Search for a character in the Marvel or DC Universes:"
				placeholder="Ironman"
			/>
			<CompareBar 
				onClick={() => APICompare()}
				onClear={() => clear()}
				onChange1={event => setCompare1(event.target.value)}
				onChange2={event => setCompare2(event.target.value)}
				labelLeft="Compare two characters:"
				labelBetween="and"
				placeholder1="Batman"
				placeholder2="Superman"
			/>
			{isCompare ? 
				<Compare data1={compareData1} data2={compareData2} onTweet={onTweet} />
				: <Search data={searchData} onTweet={onTweet} />}
		</Styled.Header>
	);
}

export default App;
