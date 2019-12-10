import React from 'react';
import * as Styled from '../styled';

// React allows us to pull out and modularize components such as this by having their parents pass props to them
// Doing this allows us to have multiple of these CompareBar components with different values and functionality
export function SearchBar({
    onClick,
    onClear,
    onChange,
    onFocus,
    label,
    placeholder,
    ...searchProps
}) {
    return (
        <Styled.SearchBar searchProps={searchProps}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input type="text" id="search" placeholder={placeholder} onChange={onChange} onFocus={onFocus} />
            <Styled.SearchButton onClick={onClick}>Search</Styled.SearchButton>
            <Styled.ClearButton onClick={onClear}>Clear</Styled.ClearButton>
        </Styled.SearchBar>
    )
}