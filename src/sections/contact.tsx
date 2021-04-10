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
    padding-top: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
    }
`;

const StyledForm = styled(Form)`
    flex: 1;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        justify-content: flex-start;
    }
`;

const Spacer = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex: 0.2;
    }
`;

const LinksContainer = styled.div`
    flex: 1;
    position: relative;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        align-self: center;
        flex: 0.8;
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
                <StyledForm initialValues={{ email: "", message: "" }} />
                <Spacer />
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
