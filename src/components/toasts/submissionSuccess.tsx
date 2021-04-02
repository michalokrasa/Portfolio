import React from "react";
import { Options } from "react-toast-notifications";

const SubmissionSuccess: { children: JSX.Element; options: Options } = {
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

export default SubmissionSuccess;
