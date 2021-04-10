import React from "react";
import styled from "styled-components";
//@ts-ignore
import CheckIcon from "../assets/svg/check_square.svg";

const List = styled.ul`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    justify-content: center;
    font-size: 0.8125rem;
    font-weight: ${({ theme }) => theme.weights.medium};
    color: ${({ theme }) => theme.palette.fontRegular};

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.75rem;
    }

    li {
        display: flex;
        align-items: center;

        svg {
            width: 1em;
        }

        span {
            padding: 0.3em;
        }
    }
`;

interface SkillListProps {
    items: string[];
}

const SkillList: React.FC<SkillListProps> = ({ items }) => {
    return (
        <List>
            {items.map((skill) => (
                <li key={skill}>
                    <CheckIcon />
                    <span>{skill}</span>
                </li>
            ))}
        </List>
    );
};

export default SkillList;
