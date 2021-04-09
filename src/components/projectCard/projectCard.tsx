import React, { useContext, useEffect, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import FadeInOverlay from "./projectCardFadeInOverlay";
import ProjectDescription from "./projectDescription";
// @ts-ignore
import GitHubIcon from "../../assets/svg/github_icon.svg";
// @ts-ignore
import LiveView from "../../assets/svg/globe_icon.svg";
import { motion } from "framer-motion";
import scrollParentToChild from "../../utils/scrollParentToChild";

const Card = styled.div`
    width: 100%;
    height: fit-content;
    max-height: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.palette.background};
    overflow: auto;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.palette.fontSecondary};
        border-radius: 4px;
    }
`;

const CardHeader = styled.div`
    flex-grow: 1;
    margin: 1.5rem;

    p {
        font-size: 0.6875rem;
        font-weight: ${({ theme }) => theme.weights.light};

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.25rem;
        }
    }

    h2 {
        font-size: 0.8125rem;
        font-weight: ${({ theme }) => theme.weights.medium};

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.75rem;
        }
    }
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius}
        ${({ theme }) => theme.borderRadius} 0 0;
`;

const LinksWrapper = styled.div`
    display: flex;
`;

const LinkIcon = styled(motion.a)<{ $active: boolean }>`
    height: 4rem;
    width: 4rem;
    margin: 1rem;
    cursor: ${({ $active }) => ($active ? "pointer" : "default")};
    path {
        fill: ${({ theme, $active }) =>
            $active ? theme.palette.primary : theme.palette.fontSecondary};
    }
`;

interface ProjectCardProps {
    title: string;
    image: JSX.Element;
    isOpen: boolean;
    description: string;
    stack: string[];
    links: {
        github?: string;
        live?: string;
    };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    children,
    title,
    image,
    description,
    stack,
    links,
    isOpen,
}) => {
    const theme = useContext(ThemeContext);
    const childRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isOpen) {
                scrollParentToChild(parentRef.current, childRef.current);
            }
        }, 300);

        return () => {
            clearTimeout(timeout);
        };
    }, [isOpen]);

    return (
        <Card ref={parentRef}>
            <ImageContainer>
                {isOpen && (
                    <FadeInOverlay>
                        <LinksWrapper>
                            <LinkIcon
                                href={links.github || ""}
                                $active={!!links.github}
                                target="_blank"
                                whileHover={links.github ? { scale: 1.2 } : {}}
                            >
                                <GitHubIcon />
                            </LinkIcon>
                            <LinkIcon
                                href={links.live || ""}
                                $active={!!links.live}
                                target="_blank"
                                whileHover={links.live ? { scale: 1.2 } : {}}
                            >
                                <LiveView />
                            </LinkIcon>
                        </LinksWrapper>
                    </FadeInOverlay>
                )}
                {React.cloneElement(image, {
                    imgStyle: { borderRadius: theme.borderRadius },
                })}
            </ImageContainer>
            <CardHeader>
                <h2>{title}</h2>
                <p>{children}</p>
            </CardHeader>
            {isOpen && (
                <ProjectDescription
                    ref={childRef}
                    stack={stack}
                    description={description}
                />
            )}
        </Card>
    );
};

export default ProjectCard;
