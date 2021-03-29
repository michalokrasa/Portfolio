import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import NextSection from "../components/nextSection";
import { Section } from "../components/layout";

const TextCard = styled.div`
    width: 90%;
    height: fit-content;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.palette.background};
    padding: 2rem;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 70%;
    }

    h2 {
        margin-bottom: 1em;
        color: ${(props) => props.theme.palette.fontTitle};
        font-size: 0.9375rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.8rem;
        }
    }

    p {
        color: ${({ theme }) => theme.palette.fontRegular};
        text-align: justify;
        font-size: 0.8125rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.625rem;
        }
    }
`;

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

const Introduction = () => {
    return (
        <Section id="introduction">
            <Wrapper>
                <TextCard>
                    <h2>Welcome to my portfolio website &#128075;</h2>
                    <p>
                        As an entry level full stack web developer and soon to
                        be BSc in Computer Science, I am ready to take my first
                        steps in commercial projects. So far, I have obtained
                        experience from plenty of personal and student projects,
                        which you can find below.
                    </p>
                    <ButtonWrapper>
                        <Button>Hire me</Button>
                    </ButtonWrapper>
                </TextCard>
            </Wrapper>
            <NextSection link="#projects" text="See my work" />
        </Section>
    );
};

export default Introduction;
