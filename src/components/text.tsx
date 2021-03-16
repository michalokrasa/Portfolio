import styled from "styled-components";

const Text = styled.p`
    color: ${(props) => props.theme.palette.fontRegular};
    text-align: justify;

    /* @media (min-width: ${(props) => props.theme.breakpoints.md}) {
        
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        font-size: 1.625rem;
    } */
`;

export default Text;
