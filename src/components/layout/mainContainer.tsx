import styled from "styled-components";

const MainContainer = styled.main`
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    z-index: 10;


    @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
        margin: 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
        margin: 0 3rem;
    }
`;

export default MainContainer;
