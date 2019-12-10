import React from 'react';
import * as Styled from '../styled';

export function CompareBar({
    onClick,
    onClear,
    onChange1,
    onChange2,
    onFocus,
    labelLeft,
    labelBetween,
    placeholder1,
    placeholder2,
    ...searchProps
}) {
    return (
        <Styled.SearchBar searchProps={searchProps}>
            <Styled.Label>{labelLeft}</Styled.Label>
            <Styled.Input2 type="text" id="search1" placeholder={placeholder1} onChange={onChange1} onFocus={onFocus} />
            <Styled.Label>{labelBetween}</Styled.Label>
            <Styled.Input type="text" id="search2" placeholder={placeholder2} onChange={onChange2} onFocus={onFocus} />
            <Styled.SearchButton onClick={onClick}>Search</Styled.SearchButton>
            <Styled.ClearButton onClick={onClear}>Clear</Styled.ClearButton>
        </Styled.SearchBar>
    )
}