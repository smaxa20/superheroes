import React from 'react';
import * as Styled from '../styled';

export function Search({ data, ...searchProps }) {
    return (
        <Styled.Data searchProps={searchProps}>
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
    )
}