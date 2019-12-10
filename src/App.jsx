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
							Object.keys(data[key]).map(result => (
								<Styled.Result>
									{Object.keys(data[key][result]).map(sectionOrLabel => (
										<Styled.Data>
											{typeof(data[key][result][sectionOrLabel]) === "object" && sectionOrLabel !== "image" &&
												<Styled.DataSection>{sectionOrLabel}</Styled.DataSection>}
											<Styled.DataValue>
												{typeof(data[key][result][sectionOrLabel]) === "object" ? 
													Object.keys(data[key][result][sectionOrLabel]).map(labelOrValue => (
														sectionOrLabel === "image" ?
															<img src={data[key][result][sectionOrLabel][labelOrValue]} alt="this character" />
														:
															<div>
																<Styled.DataLabel>{labelOrValue}: </Styled.DataLabel>
																{typeof(data[key][result][sectionOrLabel][labelOrValue]) === "object" ?
																	Object.keys(data[key][result][sectionOrLabel][labelOrValue]).map(value => (
																		<Styled.DataValue>{JSON.stringify(data[key][result][sectionOrLabel][labelOrValue][value])}</Styled.DataValue>
																	)) :
																	<Styled.DataValue>{JSON.stringify(data[key][result][sectionOrLabel][labelOrValue])}</Styled.DataValue>}
															</div>
													)) : sectionOrLabel !== "id" &&
														<div>
															<Styled.DataLabel>{sectionOrLabel}: </Styled.DataLabel>
															<Styled.DataValue>{JSON.stringify(data[key][result][sectionOrLabel])}</Styled.DataValue>
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
