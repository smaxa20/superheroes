import React from 'react';
import { Result } from './Result';
import * as Styled from '../styled';

export function Search({ data, onTweet, ...searchProps }) {

    return (
        <Styled.Data searchProps={searchProps}>
			{data !== "Loading..." ?
				Object.keys(data).map(key => (
					key === "results" &&
						Object.keys(data[key]).map(result => (
							<Result data={data[key][result]} onTweet={onTweet} />	
						))
					)
				)
			: "Loading..."}
		</Styled.Data>
    )
}