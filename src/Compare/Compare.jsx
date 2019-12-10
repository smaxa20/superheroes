import React from 'react';
import { Search } from '../Search/Search';
import * as Styled from '../styled';

// We use the same structure for each of the columns as we do for the regular search,
// The disambiguation comes with the "compare" prop
// We wrap each Search tag in a Styled.Column tag to allow us to have each column scroll independently
export function Compare({ data1, data2, onTweet, ...searchProps }) {
    return (
        <Styled.Compare searchProps={searchProps}>
            <Styled.Column><Search data={data1} onTweet={onTweet} compare={true} /></Styled.Column>
            <Styled.Column><Search data={data2} onTweet={onTweet} compare={true} /></Styled.Column>
        </Styled.Compare>
    )
}