import React from "react";
import styled from "styled-components";
import { Title } from "../components/typography";
import { Section } from "../components/layout";
import NextSection from "../components/nextSection";
import SkillList from "../components/skillList";
import { graphql, useStaticQuery } from "gatsby";

const TitleWrapper = styled(Title)`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: space-around;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: row;
    }
`;

const LayoutWrapper = styled.div`
    width: 100%;
    display: flex;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: center;
    }
`;

const Skills: React.FC = () => {
    const { dataJson } = useStaticQuery(graphql`
        query SkillsQuery {
            dataJson {
                skills {
                    frontend
                    backend
                    devops
                }
            }
        }
    `);
    const { frontend, backend, devops } = dataJson.skills;

    return (
        <Section id="skills">
            <TitleWrapper>Skills</TitleWrapper>
            <ContentWrapper>
                <LayoutWrapper>
                    <SkillList items={frontend} />
                </LayoutWrapper>
                <LayoutWrapper>
                    <SkillList items={backend} />
                </LayoutWrapper>
                <LayoutWrapper>
                    <SkillList items={devops} />
                </LayoutWrapper>
            </ContentWrapper>
            <NextSection link="#contact" />
        </Section>
    );
};

export default Skills;
