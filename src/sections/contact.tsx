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
    width: 90%;
    padding-top: 1rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: row;
        width: 80%;
    }
`;

const StyledForm = styled(Form)`
    flex: 1;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex: 2;
        justify-content: flex-start;
    }
`;

const LinksContainer = styled.div`
    position: relative;
    flex: 1;
    align-self: flex-end;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    width: 180px;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        justify-content: center;
        align-items: center;
        align-self: center;
        flex: 1;
        margin-right: 0;
        margin-left: 4rem;
        min-width: 300px;
    }
`;

const LinksBackgroundWrapper = styled.div`
    position: absolute;
    z-index: -1;
    right: 0;
    width: 180px;
    transform: translate(30px, 0);


    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 100%;
        min-width: 300px;
        transform: translate(-10px, 22px);
    }
`;

const LinkTextWrapper = styled.div`
    padding-top: 4rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-top: 0;
    }
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
                <LinksContainer>
                    <LinksBackgroundWrapper>
                        <ProfilesRightBlob width="100%" />
                    </LinksBackgroundWrapper>
                    <LinkTextWrapper>
                        <ExternalLinks items={ExternalSites} />
                    </LinkTextWrapper>
                </LinksContainer>
            </ContentWrapper>
        </Section>
    );
};

export default Contact;
