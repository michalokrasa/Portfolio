import { AnimatePresence, motion } from "framer-motion";
import React, { MouseEventHandler, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from "body-scroll-lock";

interface BackdropProps {
    isVisible: boolean;
    modalZ: number;
    onClick: MouseEventHandler<HTMLDivElement>;
}

const BackdropBackground = styled(motion.div)<{ $modalZ: number }>`
    top: 0vh;
    left: 0vw;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    z-index: calc(${({ $modalZ }) => $modalZ} - 1);
`;

const Backdrop: React.FC<BackdropProps> = ({ isVisible, modalZ, onClick }) => {
    const target =
        typeof document !== "undefined"
            ? document.getElementById("gatsby-focus-wrapper")
            : null;

    useEffect(() => {
        if (target) {
            if (isVisible) {
                disableBodyScroll(target);
            } else {
                enableBodyScroll(target);
            }
        }
        return () => {
            clearAllBodyScrollLocks();
        };
    }, [target, isVisible]);

    return target
        ? ReactDOM.createPortal(
              <AnimatePresence>
                  {isVisible && (
                      <BackdropBackground
                          onClick={onClick}
                          $modalZ={modalZ}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                      />
                  )}
              </AnimatePresence>,
              target
          )
        : null;
};

export default Backdrop;
