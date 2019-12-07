import React from 'react';
import * as Styled from './styled';

export function Search({
    onClick,
    onClear,
    onChange,
    label,
    placeholder,
    ...searchProps
}) {
    return (
        <Styled.Search searchProps={searchProps}>
            <Styled.Label>{label}</Styled.Label>
            <Styled.Input type="text" id="search" placeholder={placeholder} onChange={onChange} />
            <Styled.SearchButton onClick={onClick}>Search</Styled.SearchButton>
            <Styled.ClearButton onClick={onClear}>Clear</Styled.ClearButton>
        </Styled.Search>
    )
}