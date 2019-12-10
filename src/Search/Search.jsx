import React from 'react';
import { Result } from './Result';
import * as Styled from '../styled';

// This component handles the first part of the JSON parsing that we had to do to organize our data
// Each "Object.keys(<var>).map(<var> => ())" call breaks up a layer of the JSON into a map of it's components
export function Search({ data, onTweet, compare, ...searchProps }) {
    return (
        <Styled.Search compare={compare} searchProps={searchProps}>
			{data !== "Loading..." ?
				Object.keys(data).map(key => (
					key === "results" &&
						Object.keys(data[key]).map(result => (
							<Result data={data[key][result]} onTweet={onTweet} />	
						))
					)
				)
			: "Loading..."}
		</Styled.Search>
    )
}