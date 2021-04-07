import { StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import { Carousel } from "../components/carousel";
import { Section } from "../components/layout";
import NextSection from "../components/nextSection";
import { ProjectCard } from "../components/projectCard";
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
        stack: ["Python", "Selenium"],
        links: {
            live: "#",
        },
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc\
            laoreet molestie imperdiet. Pellentesque vehicula magna sit amet\
            ultrices feugiat. Donec sit amet ipsum laoreet, varius lectus a,\
            pretium eros. Ut ultrices tincidunt enim. Sed at mattis sem. Sed\
            vestibulum pulvinar scelerisque. Ut et sem justo. In vehicula\
            cursus mauris, eu commodo urna. Duis aliquam neque vitae erat\
            dignissim pretium. Nam a nunc fringilla, tempor turpis in,\
            scelerisque felis. Sed eget elit sit amet risus viverra porta\
            quis vel urna. Ut vestibulum sit amet erat et dignissim. Quisque\
            porttitor elementum risus non consequat. Phasellus quis bibendum\
            metus. Suspendisse leo augue, congue ac metus nec, ultricies\
            ultricies lectus. Morbi quis lorem vestibulum, convallis quam\
            sed, consectetur sem. Proin velit neque, sodales eget venenatis\
            vitae, rhoncus in felis. Vivamus blandit in elit sit amet\
            congue. Pellentesque quis tortor velit. Sed ut scelerisque\
            mauris, eu porttitor nisi. Nullam aliquet egestas nibh, sed\
            consectetur lacus tincidunt ut. Morbi sodales nulla ut purus\
            elementum, eu auctor felis rhoncus. Mauris consequat vitae\
            turpis sed feugiat. Suspendisse eu condimentum eros. Maecenas\
            viverra sem porttitor elit elementum viverra. Aenean nulla\
            tortor, sollicitudin nec lorem et, maximus consequat ipsum. In\
            hac habitasse platea dictumst. Fusce dapibus rhoncus diam id\
            suscipit. Mauris venenatis enim eget neque feugiat, eget\
            consequat arcu cursus. Nam venenatis condimentum erat cursus\
            ullamcorper. Morbi sed ante ante. Etiam pretium ante ante, at\
            ullamcorper dui viverra vitae. Suspendisse metus purus",
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
        stack: ["Python", "Selenium"],
        links: {
            github: "#",
            live: "#",
        },
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc\
            laoreet molestie imperdiet. Pellentesque vehicula magna sit amet\
            ultrices feugiat. Donec sit amet ipsum laoreet, varius lectus a,\
            pretium eros. Ut ultrices tincidunt enim. Sed at mattis sem. Sed\
            vestibulum pulvinar scelerisque. Ut et sem justo. In vehicula\
            cursus mauris, eu commodo urna. Duis aliquam neque vitae erat\
            dignissim pretium. Nam a nunc fringilla, tempor turpis in,\
            scelerisque felis. Sed eget elit sit amet risus viverra porta\
            quis vel urna. Ut vestibulum sit amet erat et dignissim. Quisque\
            porttitor elementum risus non consequat. Phasellus quis bibendum\
            metus. Suspendisse leo augue, congue ac metus nec, ultricies\
            ultricies lectus. Morbi quis lorem vestibulum, convallis quam\
            sed, consectetur sem. Proin velit neque, sodales eget venenatis\
            vitae, rhoncus in felis. Vivamus blandit in elit sit amet\
            congue. Pellentesque quis tortor velit. Sed ut scelerisque\
            mauris, eu porttitor nisi. Nullam aliquet egestas nibh, sed\
            consectetur lacus tincidunt ut. Morbi sodales nulla ut purus\
            elementum, eu auctor felis rhoncus. Mauris consequat vitae\
            turpis sed feugiat. Suspendisse eu condimentum eros. Maecenas\
            viverra sem porttitor elit elementum viverra. Aenean nulla\
            tortor, sollicitudin nec lorem et, maximus consequat ipsum. In\
            hac habitasse platea dictumst. Fusce dapibus rhoncus diam id\
            suscipit. Mauris venenatis enim eget neque feugiat, eget\
            consequat arcu cursus. Nam venenatis condimentum erat cursus\
            ullamcorper. Morbi sed ante ante. Etiam pretium ante ante, at\
            ullamcorper dui viverra vitae. Suspendisse metus purus",
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
        stack: ["Python", "Selenium"],
        links: {
            github: "#",
            live: "#",
        },
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc\
            laoreet molestie imperdiet. Pellentesque vehicula magna sit amet\
            ultrices feugiat. Donec sit amet ipsum laoreet, varius lectus a,\
            pretium eros. Ut ultrices tincidunt enim. Sed at mattis sem. Sed\
            vestibulum pulvinar scelerisque. Ut et sem justo. In vehicula\
            cursus mauris, eu commodo urna. Duis aliquam neque vitae erat\
            dignissim pretium. Nam a nunc fringilla, tempor turpis in,\
            scelerisque felis. Sed eget elit sit amet risus viverra porta\
            quis vel urna. Ut vestibulum sit amet erat et dignissim. Quisque\
            porttitor elementum risus non consequat. Phasellus quis bibendum\
            metus. Suspendisse leo augue, congue ac metus nec, ultricies\
            ultricies lectus. Morbi quis lorem vestibulum, convallis quam\
            sed, consectetur sem. Proin velit neque, sodales eget venenatis\
            vitae, rhoncus in felis. Vivamus blandit in elit sit amet\
            congue. Pellentesque quis tortor velit. Sed ut scelerisque\
            mauris, eu porttitor nisi. Nullam aliquet egestas nibh, sed\
            consectetur lacus tincidunt ut. Morbi sodales nulla ut purus\
            elementum, eu auctor felis rhoncus. Mauris consequat vitae\
            turpis sed feugiat. Suspendisse eu condimentum eros. Maecenas\
            viverra sem porttitor elit elementum viverra. Aenean nulla\
            tortor, sollicitudin nec lorem et, maximus consequat ipsum. In\
            hac habitasse platea dictumst. Fusce dapibus rhoncus diam id\
            suscipit. Mauris venenatis enim eget neque feugiat, eget\
            consequat arcu cursus. Nam venenatis condimentum erat cursus\
            ullamcorper. Morbi sed ante ante. Etiam pretium ante ante, at\
            ullamcorper dui viverra vitae. Suspendisse metus purus",
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
        stack: ["Python", "Selenium"],
        links: {
            github: "#",
        },
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc\
            laoreet molestie imperdiet. Pellentesque vehicula magna sit amet\
            ultrices feugiat. Donec sit amet ipsum laoreet, varius lectus a,\
            pretium eros. Ut ultrices tincidunt enim. Sed at mattis sem. Sed\
            vestibulum pulvinar scelerisque. Ut et sem justo. In vehicula\
            cursus mauris, eu commodo urna. Duis aliquam neque vitae erat\
            dignissim pretium. Nam a nunc fringilla, tempor turpis in,\
            scelerisque felis. Sed eget elit sit amet risus viverra porta\
            quis vel urna. Ut vestibulum sit amet erat et dignissim. Quisque\
            porttitor elementum risus non consequat. Phasellus quis bibendum\
            metus. Suspendisse leo augue, congue ac metus nec, ultricies\
            ultricies lectus. Morbi quis lorem vestibulum, convallis quam\
            sed, consectetur sem. Proin velit neque, sodales eget venenatis\
            vitae, rhoncus in felis. Vivamus blandit in elit sit amet\
            congue. Pellentesque quis tortor velit. Sed ut scelerisque\
            mauris, eu porttitor nisi. Nullam aliquet egestas nibh, sed\
            consectetur lacus tincidunt ut. Morbi sodales nulla ut purus\
            elementum, eu auctor felis rhoncus. Mauris consequat vitae\
            turpis sed feugiat. Suspendisse eu condimentum eros. Maecenas\
            viverra sem porttitor elit elementum viverra. Aenean nulla\
            tortor, sollicitudin nec lorem et, maximus consequat ipsum. In\
            hac habitasse platea dictumst. Fusce dapibus rhoncus diam id\
            suscipit. Mauris venenatis enim eget neque feugiat, eget\
            consequat arcu cursus. Nam venenatis condimentum erat cursus\
            ullamcorper. Morbi sed ante ante. Etiam pretium ante ante, at\
            ullamcorper dui viverra vitae. Suspendisse metus purus",
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
                        image={project.image}
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
