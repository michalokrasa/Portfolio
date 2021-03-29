import React from "react";
import styled from "styled-components";
import { Title } from "../components/typography";
import { Section } from "../components/layout";
//@ts-ignore
import CheckIcon from "../assets/svg/check_square.svg";
import NextSection from "../components/nextSection";

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

    .layout-wrapper {
        width: 100%;
        display: flex;
        @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
            justify-content: center;
        }
    }
`;

const SkillList = styled.ul`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    justify-content: center;
    font-size: 0.8125rem;
    font-weight: ${({ theme }) => theme.weights.medium};
    color: ${({ theme }) => theme.palette.fontRegular};

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.75rem;
    }

    li {
        display: flex;

        svg {
            width: 1em;
        }

        span {
            padding: 0.3em;
        }
    }
`;

const FrontendSkills = [
    "React",
    "Gatsby",
    "Framer Motion",
    "Styled Components",
    "Material UI",
];

const BackendSkills = [
    "Node",
    "Express",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "Swagger",
];

const DevopsSkills = ["Docker", "AWS", "GitHub"];

const Skills: React.FC = () => {
    return (
        <Section id="skills">
            <TitleWrapper>Skills</TitleWrapper>
            <ContentWrapper>
                <div className="layout-wrapper">
                    <SkillList>
                        {FrontendSkills.map((skill) => (
                            <li key={skill}>
                                <CheckIcon />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </SkillList>
                </div>
                <div className="layout-wrapper">
                    <SkillList>
                        {BackendSkills.map((skill) => (
                            <li key={skill}>
                                <CheckIcon />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </SkillList>
                </div>
                <div className="layout-wrapper">
                    <SkillList>
                        {DevopsSkills.map((skill) => (
                            <li key={skill}>
                                <CheckIcon />
                                <span>{skill}</span>
                            </li>
                        ))}
                    </SkillList>
                </div>
            </ContentWrapper>
            <NextSection link="#contact" />
        </Section>
    );
};

export default Skills;
