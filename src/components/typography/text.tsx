import styled from "styled-components";

const Text = styled.p`
    color: ${({theme}) => theme.palette.fontRegular};
    text-align: justify;
    font-size: 0.8125rem;

    @media (min-width: ${({theme}) => theme.breakpoints.md}) {
        
    }

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
        font-size: 1.625rem;
    }
`;

export default Text;
