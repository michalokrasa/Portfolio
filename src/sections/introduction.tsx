import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import NextSection from "../components/nextSection";
import { Section } from "../components/layout";
import { navigate } from "gatsby";
import TextCard from "../components/textCard";

const ButtonWrapper = styled.div`
    position: absolute;
    right: 0px;
    transform: translate(20%, 20%);
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

const content = {
    title: "Welcome to my portfolio website 👋",
    text:
        "As an entry level full stack web developer and BSc \
        in Computer Science, I am ready to take my first \
        steps in commercial projects. So far, I have obtained \
        experience from plenty of personal and student projects, \
        which I present below.",
};

const Introduction = () => {
    return (
        <Section id="introduction">
            <Wrapper>
                <TextCard title={content.title} text={content.text}>
                    <ButtonWrapper>
                        <Button onClick={() => navigate("/#contact")}>
                            Hire me
                        </Button>
                    </ButtonWrapper>
                </TextCard>
            </Wrapper>
            <NextSection link="#projects" text="See my work" />
        </Section>
    );
};

export default Introduction;
