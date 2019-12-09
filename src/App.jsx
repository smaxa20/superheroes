import React, { useState } from 'react';
import logo from './assets/logo.jpg';
import { Search } from './Search';
import * as Styled from './styled';


function App() {
	const [search, setSearch] = useState("Ironman");
	const [data, setData] = useState([]);
	const [showLogo, setShowLogo] = useState(true);

	const APICall = () => {
		fetch(
			`https://superheroapi.com/api.php/1711939795607990/search/${search}`,
		)
		.then(response => response.json())
		.then(data => setData(data))
		.catch(error => console.log(error));
		setData("Loading...")
		setShowLogo(false);
	};

	const clear = () => {
		setData([]);
		setShowLogo(true);
	}

	return (
		<Styled.Header showLogo={showLogo}>
			{showLogo && <Styled.Logo src={logo} alt="Marvel logo" />}
			<Search 
				onClick={() => APICall()}
				onClear={() => clear()}
				onChange={event => setSearch(event.target.value)}
				label="Search for someone in the Marvel or DC Universes:"
				placeholder="Ironman"
			/>
			<Styled.Data>
				{data !== "Loading..." ?
					Object.keys(data).map(key => (
						key === "results" &&
							Object.keys(data[key]).map(foo => (
								Object.keys(data[key][foo]).map(label => (
									<div>
										<br />
										{typeof(data[key][foo][label]) === "object" &&
										<Styled.DataRow>{label}</Styled.DataRow>}
										<Styled.DataRow>
											{typeof(data[key][foo][label]) === "object" ? 
												Object.keys(data[key][foo][label]).map(max => (
													<div>
														<Styled.DataRow>{max} : </Styled.DataRow>
														<Styled.DataRow>{JSON.stringify(data[key][foo][label][max])}</Styled.DataRow>
													</div>
											))
											: <div>
											<Styled.DataRow>{label} : </Styled.DataRow>
											<Styled.DataRow>{JSON.stringify(data[key][foo][label])}</Styled.DataRow>
										</div>}
										</Styled.DataRow>
									</div>
								))							
							))
						)
					)
				: "Loading..."}
			</Styled.Data>
		</Styled.Header>
	);
}

export default App;
