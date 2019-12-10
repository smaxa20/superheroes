import React, { useState, useEffect } from 'react';
import * as Styled from '../styled';

export function Result({ data, onTweet, ...resultProps }) {

	const [tweet, setTweet] = useState("");
	const [name, setName] = useState("");
	const [intelligence, setIntelligence] = useState("");
	const [strength, setStrength] = useState("");
	const [speed, setSpeed] = useState("");
	const [durability, setDurability] = useState("");
	const [power, setPower] = useState("");
	const [combat, setCombat] = useState("");

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
    
    useEffect(() => {
        setTweet("Here are the stats for " + name + 
        ":\nIntelligence: " + intelligence + 
        "\nStrength: " + strength +
        "\nSpeed: " + speed +
        "\nDurability: " + durability +
        "\nPower: " + power +
        "\nCombat: " + combat)
    }, [combat]);

    useEffect(() => {
        if (tweet !== "" && tweet !== "Here are the stats for :\nIntelligence: \nStrength: \nSpeed: \nDurability: \nPower: \nCombat: ") {
            onTweet(tweet);
        }
    }, [tweet]);

	const sendTweet = () => {
        getTweet();
    };
    
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
                <Styled.TweetButton onClick={() => sendTweet()}>Tweet This Character's Stats</Styled.TweetButton>
            </Styled.TweetContainer>
        </Styled.Result>
    )
}