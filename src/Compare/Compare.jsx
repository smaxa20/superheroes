import React from 'react';
import { Search } from '../Search/Search';
import * as Styled from '../styled';

export function Compare({ data1, data2, ...searchProps }) {
    return (
        <Styled.Compare searchProps={searchProps} className="test">
            <Styled.Column><Search data={data1} /></Styled.Column>
            <Styled.Column><Search data={data2} /></Styled.Column>
        </Styled.Compare>
    )
}