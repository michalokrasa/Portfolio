import { Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import Button from "./button";
import SuspenseOverlay from "./suspenseOverlay";
import { useToasts } from "react-toast-notifications";
import { SubmissionError, SubmissionSuccess } from "./toasts";
import StyledInput from "./input";
import StyledTextarea from "./textarea";
import InputErrorMessage from "./inputErrorMessage";
import StyledLabel from "./inputLabel";

const StyledForm = styled(Form)`
    position: relative;
    font-size: 0.8125rem;
    width: 100%;
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;

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

const validateEmail = (value: string) => {
    let error: string;
    if (!value) {
        error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Invalid email address";
    }
    return error;
};

const validateMessage = (value: string) => {
    let error: string;
    if (!value) {
        error = "Required";
    }
    return error;
};

interface InputFormProps {
    initialValues: {
        email: string;
        message: string;
    };
}

const InputForm: React.FC<InputFormProps> = ({ initialValues }) => {
    const { addToast } = useToasts();

    return (
        <Formik
            initialValues={initialValues}
            validate={(values) => {
                let errors: { email?: string; message?: string } = {};

                const emailValidation = validateEmail(values.email);
                if (emailValidation) {
                    errors.email = emailValidation;
                }

                const messageValidation = validateMessage(values.message);
                if (messageValidation) {
                    errors.message = messageValidation;
                }

                return errors;
            }}
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
                        addToast(SubmissionSuccess.children, {
                            ...SubmissionSuccess.options,
                        });
                    } else {
                        addToast(SubmissionError.children, {
                            ...SubmissionError.options,
                        });
                    }
                } catch (error) {
                    console.log("Submit error message:");
                    console.log(error.message);
                    addToast(SubmissionError.children, {
                        ...SubmissionError.options,
                    });
                }
            }}
        >
            {({ errors, touched, isSubmitting, handleChange, handleBlur }) => (
                <StyledForm
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="bot-field" />
                    <StyledLabel htmlFor="email">Your email</StyledLabel>
                    <StyledInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="bestCompany@world.com"
                        $error={!!(errors.email && touched.email)}
                    />
                    <InputErrorMessage show={!!(errors.email && touched.email)}>
                        {errors.email}
                    </InputErrorMessage>
                    <StyledLabel htmlFor="message">Message</StyledLabel>
                    <StyledTextarea
                        onChange={handleChange}
                        onBlur={handleBlur}
                        id="message"
                        name="message"
                        placeholder="Let's get in touch!"
                        $error={!!(errors.message && touched.message)}
                    />
                    <InputErrorMessage
                        show={!!(errors.message && touched.message)}
                    >
                        {errors.message}
                    </InputErrorMessage>
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
