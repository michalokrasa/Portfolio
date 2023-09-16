import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Carousel } from "../components/carousel";
import { Section } from "../components/layout";
import { ProjectCard } from "../components/projectCard";
import { Title } from "../components/typography";
import { useMediaQueryEffect } from "../hooks";

const Wrapper = styled.div`
    display: flex;
    width: calc(90% + 2rem);
    height: 100%;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: calc(80% + 2rem);
    }
`;

const Projects: React.FC = () => {
    const theme = useContext(ThemeContext);
    const isLargeScreen = useMediaQueryEffect(
        `(min-width: ${theme?.breakpoints.lg})`
    );
    const { dataJson } = useStaticQuery(graphql`
        query ProjectsQuery {
            dataJson {
                projects {
                    title
                    text
                    image {
                        src {
                            childImageSharp {
                                gatsbyImageData(placeholder: BLURRED)
                            }
                        }
                        alt
                    }
                    stack
                    links {
                        live
                        github
                    }
                    description
                }
            }
        }
    `);
    const { projects } = dataJson;

    return (
        <Section id="projects">
            <Title>Personal projects</Title>
            <Wrapper>
                <Carousel
                    orientation={isLargeScreen ? "horizontal" : "vertical"}
                    items={projects.map((project: any) => {
                        const image = getImage(project.image.src);
                        return (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            image={
                                image ?
                                <GatsbyImage
                                    image={image}
                                    alt={project.image.alt}
                                /> : <></>
                            }
                            description={project.description}
                            stack={project.stack}
                            links={project.links}
                            isOpen={false}
                        >
                            {project.text}
                        </ProjectCard>
                    )
                    })}
                />
            </Wrapper>
        </Section>
    );
};

export default Projects;
