import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        if (window) {
            const media = window.matchMedia(query);

            if (media.matches !== matches) {
                setMatches(media.matches);
            }
            const listener = () => {
                setMatches(media.matches);
            };

            try {
                // for normal browsers
                media.addEventListener("change", listener);

                return () => media.removeEventListener("change", listener);
            } catch (error) {
                // for old safari
                console.log(error);
                media.addListener(listener);

                return () => media.removeListener(listener);
            }
        }
    }, [matches, query]);

    return matches;
};

export default useMediaQuery;
