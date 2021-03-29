import React from "react";
import styled from "styled-components";
import InputForm from "../components/inputForm";
import { Section } from "../components/layout";
import { Title } from "../components/typography";
// @ts-ignore
import GitHubIcon from "../assets/svg/github_icon.svg";
// @ts-ignore
import LinkedInIcon from "../assets/svg/linkedin_icon.svg";

const TitleWrapper = styled(Title)`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-top: 10%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

const ExternalLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    align-items: center;
    flex: 1;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        align-self: center;
    }

    h2 {
        font-size: 0.8125rem;
        font-weight: ${({ theme }) => theme.weights.semiBold};
        margin: 0.5em 0;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.75rem;
        }
    }

    li {
        font-size: 0.6875rem;
        margin: 0.5em 0;
        display: flex;
        align-items: center;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.5rem;
            font-weight: ${({ theme }) => theme.weights.semiBold};
        }
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.palette.fontRegular};
    }

    svg {
        width: 1em;
        margin-right: 0.5em;
    }
`;

const ExternalSites = [
    {
        href: "https://github.com/BalboBigguns",
        name: "@BalboBigguns",
        icon: <GitHubIcon />,
    },
    {
        href: "https://www.linkedin.com/in/Micha%C5%82Okrasa/",
        name: "@MichałOkrasa",
        icon: <LinkedInIcon />,
    },
];

const Contact: React.FC = () => {
    return (
        <Section id="contact">
            <TitleWrapper>Contact</TitleWrapper>
            <ContentWrapper>
                <InputForm initialValues={{ email: "", message: "" }} />
                <ExternalLinksWrapper>
                    <h2>Visit my profiles</h2>
                    <ul>
                        {ExternalSites.map((site) => (
                            <li key={site.href}>
                                {site.icon}
                                <a href={site.href} target="_blank">
                                    {site.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </ExternalLinksWrapper>
            </ContentWrapper>
        </Section>
    );
};

export default Contact;
