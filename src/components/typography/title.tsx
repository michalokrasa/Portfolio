import styled from "styled-components";

const Title = styled.h1`
    color: ${({theme}) => theme.palette.fontRegular};
    text-align: justify;
    font-size: 1.375rem;
    font-weight: ${({theme}) => theme.weights.bold};

    @media (min-width: ${({theme}) => theme.breakpoints.lg}) {
        font-size: 3.125rem;
    }
`;

export default Title;
