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
								<Styled.Result>
									{Object.keys(data[key][foo]).map(label => (
										<Styled.Data>
											{typeof(data[key][foo][label]) === "object" && label !== "image" &&
												<Styled.DataSection>{label}</Styled.DataSection>}
											<Styled.DataValue>
												{typeof(data[key][foo][label]) === "object" ? 
													Object.keys(data[key][foo][label]).map(max => (
														label === "image" ?
															<img src={data[key][foo][label][max]} alt="this character" />
														:
															<div>
																<Styled.DataLabel>{max}: </Styled.DataLabel>
																{typeof(data[key][foo][label][max]) === "object" ?
																	Object.keys(data[key][foo][label][max]).map(min => (
																		<Styled.DataValue>{JSON.stringify(data[key][foo][label][max][min])}</Styled.DataValue>
																	)) :
																	<Styled.DataValue>{JSON.stringify(data[key][foo][label][max])}</Styled.DataValue>}
															</div>
													)) : label !== "id" &&
														<div>
															<Styled.DataLabel>{label}: </Styled.DataLabel>
															<Styled.DataValue>{JSON.stringify(data[key][foo][label])}</Styled.DataValue>
														</div>}
											</Styled.DataValue>
										</Styled.Data>
									))}
								</Styled.Result>						
							))
						)
					)
				: "Loading..."}
			</Styled.Data>
		</Styled.Header>
	);
}

export default App;
