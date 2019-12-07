import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import { Search } from './Search';
import * as Styled from './styled';


function App() {
	const [search, setSearch] = useState("Ironman");
	const [data, setData] = useState([]);

	const APICall = () => {
		fetch(
			`https://superheroapi.com/api.php/1711939795607990/search/${search}`,
		)
		.then(response => response.json())
		.then(data => setData(data))
		.catch(error => console.log(error));
	};

	return (
		<Styled.Header>
			<Styled.Logo src={logo} alt="Marvel logo" />
			<Search 
				onClick={() => APICall()}
				onClear={() => setData()}
				onChange={event => setSearch(event.target.value)}
				label="Search for someone in the Marvel or DC Universes:"
				placeholder="Ironman"
			/>
			<Styled.Data>
				{data &&
					Object.keys(data).map(key => (
						key === "results" &&
							Object.keys(data[key]).map(foo => (
								<Styled.DataRow>{JSON.stringify(data[key][foo])}</Styled.DataRow>
							))
						)
					)
				}
			</Styled.Data>
		</Styled.Header>
	);
}

export default App;
