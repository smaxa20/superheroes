import styled from 'styled-components';

export const Header = styled.div`
    font-family: serif;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.showLogo ? "center" : "flex-start"};
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
`;

export const Data = styled.div`
    overflow: scroll;
    font-family: serif;
    color: white;
    margin-top: 8px;
`;

export const DataRow = styled.span`
    margin-top: 0px;
    margin-bottom: 24px;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    margin-top: 16px;
`;

export const Logo = styled.img`
    height: 500px;
`;

export const Label = styled.label`
    font-size: 24px;
    color: white;
    margin: 0px;
`;

export const Input = styled.input`
    font-family: inherit;
    font-size: 24px;
    border: 1px solid #f0131e;
    border-radius: 3px 0 0 3px;
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 4px;
    background: black;
    color: white;
    &:focus {
        outline: 0;
    }
`;

export const SearchButton = styled.button`
    background-color: #f0131e;
    color: white;
    font-size: 24px;
    font-family: inherit;
    height: 32px;
    border: 1px solid #f0131e;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
    &:active {
        background-color: #d8111b;
        border-color: #d8111b;
    }
`;

export const ClearButton = styled.button`
    background-color: #0476f2;
    color: white;
    font-size: 24px;
    font-family: inherit;
    height: 32px;
    border-radius: 0 3px 3px 0;
    border: 1px solid #0476f2;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
    &:active {
        background-color: #036bd9;
        border-color: #036bd9;
    }
`;
