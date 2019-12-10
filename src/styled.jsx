import styled from 'styled-components';

// Styled Components is a library that allows you to more easily write CSS without having to use classes
// Instead you create React components and use them by tag (e.g. this first component would be used <Styled.Header>stuff</Styled.Header>)

// Because you're creating components not using classes, Styled Components allows you to pass props and add CSS rules based on those props
// You can see an example of this in the Header component's justify-content rule 
// - if the showLogo that was passed in evaluates to true, we want to justify the content to the center, if it's false we want to justify the content to the start

export const Header = styled.div`
    font-family: serif;
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.showLogo ? "center" : "flex-start"};
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
`;

// Styled Components also supports nested rules such as the one seen here
// Every child of Result except the last one will have a margin-bottom of 16px
export const Result = styled.div`
    overflow: scroll;
    font-family: serif;
    color: white;
	:not(:last-child) {
        margin-bottom: 16px;
    }
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

export const Search = styled.div`
    margin-top: 16px;
    width: ${props => props.compare ? "100%" : "90%"};
    font-family: serif;
    color: white;
`;

export const Data = styled.div`
    font-family: serif;
    color: white;
	width: 90%;
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

// Another way to nest rules is to explicitly specify another component as a child as seen here
// This says that if a Data component is the direct child of a Column component, that Data component will have a width of 100%
export const Column = styled.div`
	height: 83vh;
	width: 45%;
	overflow: scroll;
	${Data} {
		width: 100%;
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

export const SearchBar = styled.div`
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

export const TweetContainer = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const TweetButton = styled.button`
	background-color: #00aced;
    color: white;
    font-size: 24px;
    font-family: inherit;
    height: 32px;
    border-radius: 3px;
    border: 1px solid #00aced;
    cursor: pointer;
    &:focus {
        outline: 0;
    }
    &:active {
        background-color: #0084b4;
        border-color: #0084b4;
    }
`;
