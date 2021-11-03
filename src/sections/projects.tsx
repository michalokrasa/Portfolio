import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Carousel } from "../components/carousel";
import { Section } from "../components/layout";
import NextSection from "../components/nextSection";
import { ProjectCard } from "../components/projectCard";
import { Title } from "../components/typography";
import { useMediaQueryEffect } from "../hooks";

const Projects: React.FC = () => {
    const theme = useContext(ThemeContext);
    const isLargeScreen = useMediaQueryEffect(
        `(min-width: ${theme.breakpoints.lg})`
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
                                gatsbyImageData(
                                    placeholder: BLURRED
                                )
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
            <Carousel
                orientation={isLargeScreen ? "horizontal" : "vertical"}
                items={projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        image={
                            <GatsbyImage
                                image={getImage(project.image.src)}
                                alt={project.image.alt}
                            />
                        }
                        description={project.description}
                        stack={project.stack}
                        links={project.links}
                        isOpen={false}
                    >
                        {project.text}
                    </ProjectCard>
                ))}
            />
            <NextSection link="#skills" />
        </Section>
    );
};

export default Projects;
