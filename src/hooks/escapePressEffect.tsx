import React, { useCallback, useEffect } from "react";

const useEscapePressEffect = (onEscapeCallback: () => void) => {
    const escFunction = useCallback((event) => {
        if (event.keyCode === 27) {
            onEscapeCallback();
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);
};

export default useEscapePressEffect;
