import { Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "./button";
import SuspenseOverlay from "./suspenseOverlay";
import { useToasts, Options } from "react-toast-notifications";

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

const StyledSuspenseOverlay = styled(SuspenseOverlay)`
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

const ErrorToast: { children: JSX.Element; options: Options } = {
    children: (
        <p>
            Something went wrong. Please use your email client to contact me at{" "}
            <a href="mailto:michal.okrasa98@gmail.com">
                {" "}
                michal.okrasa98@gmail.com{" "}
            </a>
            . 😧😬
        </p>
    ),
    options: {
        appearance: "error",
        autoDismiss: false,
    },
};

const SuccesToast: { children: JSX.Element; options: Options } = {
    children: (
        <p>
            Thank you, your message was successfully submitted! I will reach out
            to you ASAP. 📫&#128232;
        </p>
    ),
    options: {
        appearance: "success",
    },
};

const InputForm = ({ initialValues }) => {
    const { addToast } = useToasts();

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                try {
                    const sendingThrottle = new Promise((r) =>
                        setTimeout(r, 500)
                    );
                    const response = fetch("/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: encode({
                            "form-name": "contact",
                            ...values,
                        }),
                    });

                    const [result] = await Promise.all([
                        response,
                        sendingThrottle,
                    ]);
                    console.log("Submit respose message:");
                    console.log(result);
                    if (result.ok) {
                        addToast(SuccesToast.children, {
                            ...SuccesToast.options,
                        });
                    } else {
                        addToast(ErrorToast.children, {
                            ...ErrorToast.options,
                        });
                    }
                } catch (error) {
                    console.log("Submit error message:");
                    console.log(error.message);
                    addToast(ErrorToast.children, { ...ErrorToast.options });
                }
            }}
        >
            {({ isSubmitting }) => (
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
                    <StyledSuspenseOverlay loading={isSubmitting}>
                        <Button type="submit" disabled={isSubmitting}>
                            Send
                        </Button>
                    </StyledSuspenseOverlay>
                </StyledForm>
            )}
        </Formik>
    );
};

export default InputForm;
