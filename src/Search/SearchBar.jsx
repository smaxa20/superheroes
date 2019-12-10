import React from 'react';
import * as Styled from '../styled';

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