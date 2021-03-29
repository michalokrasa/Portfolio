import { Field, Form, Formik } from "formik";
import { navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import Button from "./button";

// interface Values {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

const StyledForm = styled(Form)`
    position: relative;
    font-size: 0.8125rem;
    width: 100%;
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;

    label {
        color: ${({ theme }) => theme.palette.fontRegular};
        display: block;
        font-size: 1em;
        padding: 0 0.5em;
        margin-top: 0.5em;
    }

    input {
        font-size: 1em;
        font-family: "Montserrat";
        width: 50%;
        margin: 1em 0;
        height: 2em;
        padding: 1em;
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.palette.background};
        border-radius: ${({ theme }) => theme.borderRadius};
        box-shadow: ${({ theme }) => theme.shadow};
    }

    textarea {
        font-size: 1em;
        font-family: "Montserrat";
        resize: none;
        height: 10em;
        margin: 1em 0;
        padding: 1em;
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.palette.background};
        border-radius: ${({ theme }) => theme.borderRadius};
        box-shadow: ${({ theme }) => theme.shadow};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        font-size: 1.5rem;
    }
`;

const StyledButton = styled(Button)`
    align-self: flex-end;
`;

const encode = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

const handleSubmit = (event) => {
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
            "form-name": event.target.getAttribute("name"),
            ...event.target.data,
        }),
    })
        .then(() => navigate("/#contact"))
        .catch((error) => alert(error));
};

const InputForm = ({ initialValues }) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (
                values
                // values: Values,
                // { setSubmitting }: FormikHelpers<Values>
            ) => {
                try {
                    await fetch("/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: encode({
                            "form-name": "contact",
                            ...values,
                        }),
                    });
                } catch (error) {
                    console.log("error message");
                    console.log(error);
                }
                navigate("/#contact");
            }}
        >
            <StyledForm
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
            >
                <input type="hidden" name="bot-field" />
                <label htmlFor="email">Your email</label>
                <Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                />
                <label htmlFor="message">Message</label>
                <Field
                    id="message"
                    name="message"
                    component="textarea"
                    placeholder="Message"
                />
                <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
        </Formik>
    );
};

export default InputForm;
