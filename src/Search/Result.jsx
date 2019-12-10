import React, { useState, useEffect } from 'react';
import * as Styled from '../styled';

// This component does a lot to gather the data that we'd like to post in a Tweet
export function Result({ data, onTweet, ...resultProps }) {
	const [tweet, setTweet] = useState(""); // This is the stringified data that we send upwards
	const [name, setName] = useState(""); // The rest of these states are values that we include in the tweet
	const [intelligence, setIntelligence] = useState("");
	const [strength, setStrength] = useState("");
	const [speed, setSpeed] = useState("");
	const [durability, setDurability] = useState("");
	const [power, setPower] = useState("");
	const [combat, setCombat] = useState("");

    // This function gathers the data that we want to send in the tweet and puts it in its corresponding state variable
	const getTweet = () => {
        Object.keys(data).map(sectionOrLabel => {
            if (sectionOrLabel === "name") {
                setName(data[sectionOrLabel]);
            }
            if (typeof(data[sectionOrLabel]) === "object" && sectionOrLabel !== "image" && typeof(data[sectionOrLabel]) === "object") {
                Object.keys(data[sectionOrLabel]).map(labelOrValue => {
                    if (labelOrValue === "intelligence") {
                        setIntelligence(data[sectionOrLabel][labelOrValue]);
                    } else if (labelOrValue === "strength") {
                        setStrength(data[sectionOrLabel][labelOrValue]);
                    } else if (labelOrValue === "speed") {
                        setSpeed(data[sectionOrLabel][labelOrValue]);
                    } else if (labelOrValue === "durability") {
                        setDurability(data[sectionOrLabel][labelOrValue]);
                    } else if (labelOrValue === "power") {
                        setPower(data[sectionOrLabel][labelOrValue]);
                    } else if (labelOrValue === "combat") {
                        setCombat(data[sectionOrLabel][labelOrValue]);
                    }
                })
            }
        })
    };
    
    // This function will run every time the "combat" state variable changes which will only happen after getTweet runs
    // This couldn't be included in the same function as getTweet 
    // Because the setState functions take longer than we expected and we ran into race conditions
    useEffect(() => {
        setTweet("Here are the stats for " + name + 
        ":\nIntelligence: " + intelligence + 
        "\nStrength: " + strength +
        "\nSpeed: " + speed +
        "\nDurability: " + durability +
        "\nPower: " + power +
        "\nCombat: " + combat)
    }, [combat]);

    // This function will run after the useEffect hook above that depends on "combat"
    // Similarly, we were running into race conditions and had to make sure the "tweet" state variable actually changes before we send it
    // We were still seeing a race condition where the "tweet" state variable would update to include our formatted string without any variables,
    // So we decided it would be best to make absolutely sure we were getting the data that we wanted in our tweet by using a conditional on specific values
    useEffect(() => {
        if (tweet !== "" && tweet !== "Here are the stats for :\nIntelligence: \nStrength: \nSpeed: \nDurability: \nPower: \nCombat: ") {
            onTweet(tweet);
        }
    }, [tweet]);
    
    // This component handles the last part of the JSON parsing that we had to do to organize our data
    // Each "Object.keys(<var>).map(<var> => ())" call breaks up a layer of the JSON into a map of it's components
    // This part of the parsing needed to be broken up from the part in the Search component 
    // because we need to gether data from each individual query result in order to formulate tweets for each result
    return (
        <Styled.Result resultProps={resultProps}>
            {Object.keys(data).map(sectionOrLabel => (
                <Styled.Data>
                    {typeof(data[sectionOrLabel]) === "object" && sectionOrLabel !== "image" &&
                        <Styled.DataSection>{sectionOrLabel}</Styled.DataSection>}
                    <Styled.DataValue>
                        {typeof(data[sectionOrLabel]) === "object" ? 
                            Object.keys(data[sectionOrLabel]).map(labelOrValue => (
                                sectionOrLabel === "image" ?
                                    <img src={data[sectionOrLabel][labelOrValue]} alt="this character" />
                                :
                                    <div>
                                        <Styled.DataLabel>{labelOrValue}: </Styled.DataLabel>
                                        {typeof(data[sectionOrLabel][labelOrValue]) === "object" ?
                                            Object.keys(data[sectionOrLabel][labelOrValue]).map(value => (
                                                <Styled.DataValue>{JSON.stringify(data[sectionOrLabel][labelOrValue][value])}</Styled.DataValue>
                                            )) :
                                            <Styled.DataValue>{JSON.stringify(data[sectionOrLabel][labelOrValue])}</Styled.DataValue>}
                                    </div>
                            )) : sectionOrLabel !== "id" &&
                                <div>
                                    <Styled.DataLabel>{sectionOrLabel}: </Styled.DataLabel>
                                    <Styled.DataValue>{JSON.stringify(data[sectionOrLabel])}</Styled.DataValue>
                                </div>}
                    </Styled.DataValue>
                </Styled.Data>
            ))}
            <Styled.TweetContainer>
                <Styled.TweetButton onClick={() => getTweet()}>Tweet This Character's Stats</Styled.TweetButton>
            </Styled.TweetContainer>
        </Styled.Result>
    )
}