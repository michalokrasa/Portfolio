import styled from "styled-components";

const MainContainer = styled.main`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    z-index: 10;
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        padding: 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        padding: 0 3rem;
    }
`;

export default MainContainer;
