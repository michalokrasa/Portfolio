import React from "react";
import styled from "styled-components";
import { Title } from "../components/typography";
import { Section } from "../components/layout";
import SkillList from "../components/skillList";
import { graphql, useStaticQuery } from "gatsby";

const TitleWrapper = styled(Title)`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: space-around;
    flex-direction: column;
    flex-direction: row;
    flex-wrap: wrap;

    & > *:last-child {
        align-self: flex-start;
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-wrap: nowrap;
        & > *:first-child {
            justify-content: flex-start;
        }

        & > *:last-child {
            justify-content: flex-end;
            align-self: auto;
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 80%;
    }
`;

const LayoutWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: center;
        width: 100%;
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
        </Section>
    );
};

export default Skills;
