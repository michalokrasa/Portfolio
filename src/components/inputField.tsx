import styled from "styled-components";
import React, { useState } from "react";
import { Field, useFormik } from "formik";


const StyledInput = styled.div`
    position: relative;
    font-size: 0.8125rem;

    /* label {
        position: absolute;
        font-size: 1em;
        padding: 0.5em;
    } */

    input {
        height: 2em;
        padding: 1em;
        outline: none;
        border: none;
        background-color: ${({ theme }) => theme.palette.background};
        border-radius: ${({ theme }) => theme.borderRadius};
        box-shadow: ${({ theme }) => theme.shadow};
    }
`;

interface InputFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, type, label }) => {

    // return (
    //     <form onSubmit={formik.handleSubmit}>
    //       <label htmlFor="email">Email Address</label>
    //       <input
    //         id="email"
    //         name="email"
    //         type="email"
    //         onChange={formik.handleChange}
    //         value={formik.values.email}
    //       />
    
    //       <button type="submit">Submit</button>
    //     </form>
    //   );

    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <Field id={id} name={name} type={type} placeholder={label} />
            {/* 
            <label htmlFor="firstName">First Name</label>
            <input
                type={type}
                id={id}
                name={name}
                value={formik.values.email}
                onChange={formik.handleChange}
            /> */}
        </StyledInput>
    );
};

export default InputField;
