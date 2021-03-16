import React from "react";
import styled from "styled-components";
import Text from "../components/text";
import Header from "../components/textHeader";
import Button from "../components/button";
import NextSection from "../components/nextSection";
import Section from "../components/section";

const TextContainer = styled.div`
    width: 90%;
    border-radius: ${(props) => props.theme.borderRadius};
    box-shadow: ${(props) => props.theme.shadow};
    background-color: ${(props) => props.theme.palette.background};
    padding: 2rem;
    position: relative;

    transform: translate(0, -10%);
`;

const ButtonWrapper = styled.div`
    position: absolute;
    right: 0px;
    transform: translate(20%, 20%);
`;

const Introduction = () => {
    return (
        <Section id="introduction">
            <TextContainer>
                <Header>Welcome to my portfolio website &#128075;</Header>
                <Text>
                    As an entry level full stack web developer and soon to be
                    BSc in Computer Science, I am ready to take my first steps
                    in commercial projects. So far, I have obtained experience
                    from plenty of personal and student projects, which you can
                    find below.
                </Text>
                <ButtonWrapper>
                    <Button>Hire me</Button>
                </ButtonWrapper>
            </TextContainer>
            <NextSection link="#projects" text="See my work" />
        </Section>
    );
};

export default Introduction;
