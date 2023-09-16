import React, { ReactNode } from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 90%;
    height: fit-content;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    background-color: ${({ theme }) => theme.palette.background};
    padding: 2rem;
    position: relative;

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        width: 80%;
    }

    h2 {
        margin-bottom: 1em;
        color: ${(props) => props.theme.palette.fontTitle};
        font-size: 0.9375rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.8rem;
        }
    }

    p {
        color: ${({ theme }) => theme.palette.fontRegular};
        text-align: justify;
        font-size: 0.8125rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
            font-size: 1.625rem;
        }
    }
`;

interface TextCardProps {
    title: string;
    text: string;
    children: ReactNode;
}

const TextCard: React.FC<TextCardProps> = ({ title, text, children }) => {
    return (
        <Card>
            <h2>{title}</h2>
            <p>{text}</p>
            {children}
        </Card>
    );
};

export default TextCard;
