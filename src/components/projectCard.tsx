import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.palette.background};
    display: flex;
    flex-direction: column;

    .textContainer {
        flex-grow: 1;
        padding: 1rem;
    }

    img {
        border-radius: ${({ theme }) => theme.borderRadius}
            ${({ theme }) => theme.borderRadius} 0 0;
    }

    p {
        font-size: 0.6875rem;
        font-weight: ${({ theme }) => theme.weights.light};
    }

    h2 {
        font-size: 0.8125rem;
        font-weight: ${({ theme }) => theme.weights.medium};

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.75rem;
        }
    }
`;

interface ProjectCardProps {
    title: string;
    snippet: JSX.Element;
    isOpen: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    children,
    title,
    snippet,
    isOpen
}) => {

    return (
        <Card>
            <div className="imageContainer">{snippet}</div>
            <div className="textContainer">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            {isOpen && <Content />}
        </Card>
    );
};

function Content() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            laoreet molestie imperdiet. Pellentesque vehicula magna sit amet
            ultrices feugiat. Donec sit amet ipsum laoreet, varius lectus a,
            pretium eros. Ut ultrices tincidunt enim. Sed at mattis sem. Sed
            vestibulum pulvinar scelerisque. Ut et sem justo. In vehicula cursus
            mauris, eu commodo urna. Duis aliquam neque vitae erat dignissim
            pretium. Nam a nunc fringilla, tempor turpis in, scelerisque felis.
            Sed eget elit sit amet risus viverra porta quis vel urna. Ut
            vestibulum sit amet erat et dignissim. Quisque porttitor elementum
            risus non consequat. Phasellus quis bibendum metus. Suspendisse leo
            augue, congue ac metus nec, ultricies ultricies lectus. Morbi quis
            lorem vestibulum, convallis quam sed, consectetur sem. Proin velit
            neque, sodales eget venenatis vitae, rhoncus in felis. Vivamus
            blandit in elit sit amet congue. Pellentesque quis tortor velit. Sed
            ut scelerisque mauris, eu porttitor nisi. Nullam aliquet egestas
            nibh, sed consectetur lacus tincidunt ut. Morbi sodales nulla ut
            purus elementum, eu auctor felis rhoncus. Mauris consequat vitae
            turpis sed feugiat. Suspendisse eu condimentum eros. Maecenas
            viverra sem porttitor elit elementum viverra. Aenean nulla tortor,
            sollicitudin nec lorem et, maximus consequat ipsum. In hac habitasse
            platea dictumst. Fusce dapibus rhoncus diam id suscipit. Mauris
            venenatis enim eget neque feugiat, eget consequat arcu cursus. Nam
            venenatis condimentum erat cursus ullamcorper. Morbi sed ante ante.
            Etiam pretium ante ante, at ullamcorper dui viverra vitae.
            Suspendisse metus purus, fringilla ut dignissim in, consectetur et
            arcu. Maecenas at vehicula nunc, id rhoncus nisl. In et nisl non
            purus euismod porta vitae vel ligula. Fusce fermentum sem et ipsum
            imperdiet, sit amet rutrum purus imperdiet. Sed et iaculis orci, at
            laoreet nibh. In consequat pellentesque felis, sed tempus dolor
            feugiat nec. Suspendisse nisi risus, dapibus quis vestibulum quis,
            pulvinar at metus. Praesent dictum risus nec lacinia varius. Nulla
            viverra enim id tellus congue finibus. Nulla quis nisi leo. Sed
            felis arcu, venenatis eu dictum eget, egestas vitae elit. Integer
            vel libero eget sapien efficitur suscipit et eu ipsum. Vestibulum id
            imperdiet diam. Vestibulum eros erat, venenatis id feugiat vel,
            dictum sit amet lacus. Quisque tristique dignissim lectus, quis
            maximus nulla finibus non. Sed vel nunc ac lacus tincidunt mollis.
            Ut a felis turpis. Morbi malesuada tortor ligula, vel rutrum sapien
            suscipit nec. Morbi at feugiat justo. Integer non vestibulum erat,
            sed finibus nisi. Praesent tincidunt enim nec enim sollicitudin
            dictum. Mauris tempor lorem sit amet sodales lacinia. Pellentesque
            id nunc scelerisque velit vulputate rhoncus. Nam fringilla, turpis
            ut eleifend semper, purus metus sagittis tellus, id aliquam nibh ex
            eu magna.
        </motion.div>
    );
}

export default ProjectCard;
