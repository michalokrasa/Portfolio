import { StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Carousel } from "../components/carousel";
import { Section } from "../components/layout";
import NextSection from "../components/nextSection";
import ProjectCard from "../components/projectCard";
import { Title } from "../components/typography";
import { useMediaQueryEffect } from "../hooks";

const projects = [
    {
        title: "Ambient",
        text: "The project of medical dispenser.",
        image: (
            <StaticImage
                src="../assets/images/Ambient.png"
                alt="Ambient screenshot"
                placeholder="blurred"
            />
        ),
    },
    {
        title: "Lecture Assistant",
        text: "Bachelor thesis project.",
        image: (
            <StaticImage
                src="../assets/images/LectureAssistant.png"
                alt="LectureAssistant screenshot"
                placeholder="blurred"
            />
        ),
    },
    {
        title: "Portfolio Website",
        text: "The portfolio website.",
        image: (
            <StaticImage
                src="../assets/images/Portfolio.png"
                alt="Portfolio screenshot"
                placeholder="blurred"
            />
        ),
    },
    {
        title: "Google Timetable",
        text: "Web scraper with google calendar integration.",
        image: (
            <StaticImage
                src="../assets/images/GoogleTimetable.png"
                alt="GoogleTimetable screenshot"
                placeholder="blurred"
            />
        ),
    },
];

const Projects: React.FC = () => {
    const theme = useContext(ThemeContext);
    const isLargeScreen = useMediaQueryEffect(
        `(min-width: ${theme.breakpoints.lg})`
    );

    return (
        <Section id="projects">
            <Title>Projects</Title>
            <Carousel
                orientation={isLargeScreen ? "horizontal" : "vertical"}
                items={projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        snippet={project.image}
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
