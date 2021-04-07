import React from "react";
import styled from "styled-components";
import { Form } from "../components/input";
import { Section } from "../components/layout";
import { Title } from "../components/typography";
// @ts-ignore
import GitHubIcon from "../assets/svg/github_icon.svg";
// @ts-ignore
import LinkedInIcon from "../assets/svg/linkedin_icon.svg";
// @ts-ignore
import ProfilesRightBlob from "../assets/svg/Profiles_bottom_right.svg";
import ExternalLinks from "../components/externalLinks";

const TitleWrapper = styled(Title)`
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: ${({ theme }) => theme.palette.white};
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-top: 5%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

const LinksContainer = styled.div`
    position: relative;
    flex: 1;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        align-self: center;
    }
`;

const LinksBackground = styled(ProfilesRightBlob)`
    position: absolute;
    z-index: -1;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 10%);
    height: 100%;
`;

export interface ExternalSite {
    href: string;
    name: string;
    icon: JSX.Element;
}

const ExternalSites: ExternalSite[] = [
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
            <TitleWrapper>Contact me</TitleWrapper>
            <ContentWrapper>
                <Form initialValues={{ email: "", message: "" }} />
                <LinksContainer>
                    <LinksBackground />
                    <ExternalLinks
                        title="Visit my profiles"
                        items={ExternalSites}
                    />
                </LinksContainer>
            </ContentWrapper>
        </Section>
    );
};

export default Contact;
