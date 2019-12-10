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

export const Result = styled.div`
    overflow: scroll;
    font-family: serif;
    color: white;
    margin-top: 16px;
    padding: 16px;
    border: solid #191919 2px;
    border-radius: 3px;
    background: #333333;
`;

export const Compare = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

export const Data = styled.div`
    overflow: scroll;
    font-family: serif;
    color: white;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

export const DataValue = styled.span`
    margin-top: 0px;
    margin-bottom: 24px;
    font-size: 16px;
`;

export const DataLabel = styled.span`
    margin-top: 0px;
    margin-bottom: 24px;
    font-size: 18px;
    text-transform: capitalize;
`;

export const DataSection = styled.span`
    margin-top: 0px;
    margin-bottom: 24px;
    font-size: 18px;
    text-decoration: underline;
    text-transform: capitalize;
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

export const Input2 = styled.input`
    font-family: inherit;
    font-size: 24px;
    border: 1px solid #f0131e;
    border-radius: 3px;
    padding-left: 4px;
    padding-right: 4px;
    margin-left: 4px;
    margin-right: 4px;
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
