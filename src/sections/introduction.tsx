import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    height: 100vh;
    position: relative;
`;

const Text = styled.p`
    position: absolute;
    top: 30%;
    left: 40%;
`;

const Introduction = () => {
    return (
        <Section id='introduction'>
            <Text>Hello, I'm Mike. Welcome to my portfolio website.</Text>
        </Section>
    );
}

export default Introduction;
