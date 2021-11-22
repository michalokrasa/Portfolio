import React from "react";
import styled from "styled-components";
import Button from "../components/button";
import { Section } from "../components/layout";
import { graphql, navigate, useStaticQuery } from "gatsby";
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

const Introduction: React.FC = () => {
    const { dataJson } = useStaticQuery(graphql`
        query IntroductionQuery {
            dataJson {
                introduction {
                    title
                    text
                }
            }
        }
    `);
    const { title, text } = dataJson.introduction;

    return (
        <Section id="introduction">
            <Wrapper>
                <TextCard title={title} text={text}>
                    <ButtonWrapper>
                        <Button onClick={() => navigate("/#contact")}>
                            Hire me
                        </Button>
                    </ButtonWrapper>
                </TextCard>
            </Wrapper>
        </Section>
    );
};

export default Introduction;
