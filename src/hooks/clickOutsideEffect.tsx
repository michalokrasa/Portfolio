import React, { useEffect } from "react";

const useClickOutsideEffect = (
    ref: React.MutableRefObject<any>,
    clickOutsideCallback: () => void
) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target)) {
                clickOutsideCallback();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

export default useClickOutsideEffect;
