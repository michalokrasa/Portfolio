import styled from "styled-components";

const StyledLabel = styled.label`
    color: ${({ theme }) => theme.palette.fontRegular};
    display: block;
    font-size: 1em;
    padding: 0 0.5em;
    margin-top: 1em;
`;

export default StyledLabel;
