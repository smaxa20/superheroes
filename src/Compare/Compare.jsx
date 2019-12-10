import React from 'react';
import { Search } from '../Search/Search';
import * as Styled from '../styled';

export function Compare({ data1, data2, onTweet, ...searchProps }) {
    return (
        <Styled.Compare searchProps={searchProps}>
            <Styled.Column><Search data={data1} onTweet={onTweet} compare={true} /></Styled.Column>
            <Styled.Column><Search data={data2} onTweet={onTweet} compare={true} /></Styled.Column>
        </Styled.Compare>
    )
}