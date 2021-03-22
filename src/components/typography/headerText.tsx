import styled from "styled-components";

const HeaderText = styled.h2`
    margin-bottom: 1em;
    color: ${props=>props.theme.palette.fontTitle};
    font-size: 0.9rem;

    @media (min-width: ${({theme})=>theme.breakpoints.lg}){
        font-size: 1.8rem;
    }
`;

export default HeaderText;
