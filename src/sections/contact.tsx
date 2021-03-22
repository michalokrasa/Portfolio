import React from "react";
import styled from "styled-components";
import { Section } from "../components/layout";

const Text = styled.p``;

const Contact: React.FC = () => {
    return (
        <Section id="contact">
            <Text>Hello, I'm Mike. Welcome to my portfolio website.</Text>
        </Section>
    );
};

export default Contact;
