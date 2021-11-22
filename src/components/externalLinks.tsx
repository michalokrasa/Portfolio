import React from "react";
import styled from "styled-components";
import { ExternalSite } from "../sections/contact";

const ExternalLinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 0.8125rem;
        font-weight: ${({ theme }) => theme.weights.semiBold};
        margin: 0.5em 0;
        color: ${({ theme }) => theme.palette.fontRegular};

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

        path {
            fill: ${({ theme }) => theme.palette.fontRegular};
        }
    }
`;

interface ExternalLinksProps {
    items: ExternalSite[];
}

const ExternalLinks: React.FC<ExternalLinksProps> = ({ items }) => {
    return (
        <ExternalLinksWrapper>
            <ul>
                {items.map((site) => (
                    <li key={site.href}>
                        {site.icon}
                        <a href={site.href} target="_blank">
                            {site.name}
                        </a>
                    </li>
                ))}
            </ul>
        </ExternalLinksWrapper>
    );
};

export default ExternalLinks;
