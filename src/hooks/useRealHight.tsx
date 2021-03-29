import React from "react";

let throttleTimer: number = null;

const throttle = (callback: () => void, delay: number) => {
    if (throttleTimer) {
        return;
    }

    throttleTimer = window.setTimeout(() => {
        callback();
        throttleTimer = null;
    }, delay);
};

const setRealVH = () => {
    document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight / 100}px`
    );
};

const useRealVH = () => {
    React.useEffect(() => {
        setRealVH();

        const handleWindowResize = () => {
            const oldVH = parseFloat(
                document.documentElement.style.getPropertyValue("--vh")
            );
            const newVH = window.innerHeight / 100;
            const difference = newVH / oldVH;
            
            // This naively prevents updates when mobile keyboard appears on screen
            if (difference != 1.0 && difference < 1.4 && difference > 0.6) {
                setRealVH();
                console.log(`VH updated. Difference: ${difference}.`);
            } else {
                console.log(`VH update denied. Difference: ${difference}.`);
            }
        };

        const throttledHandler = () => {
            throttle(handleWindowResize, 300);
        };

        window.addEventListener("resize", throttledHandler);
        return () => window.removeEventListener("resize", throttledHandler);
    }, []);
};

export default useRealVH;
