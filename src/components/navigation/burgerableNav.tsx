import React, { useContext, useState } from "react";
import FocusLock from "react-focus-lock";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {
    MenuItem,
    SideMenuWrapper,
    BurgerButton,
    SideMenu,
    NavBar,
    HeaderMenu,
} from ".";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMediaQueryEffect } from "../../hooks";
import { ThemeContext } from "styled-components";
import useEscapePressEffect from "../../hooks/escapePressEffect";

const menuId = "burger-nav";

interface BurgerableNavProps {
    menuItems: MenuItem[];
}

const SCROLL_ACTIVATION_THRESHHOLD = -50;


const isInitiallyScrolled = () => {
    if (typeof window !== 'undefined') {
        return window.scrollY > -SCROLL_ACTIVATION_THRESHHOLD;
    } 

    return false;
};

const BurgerableNav: React.FC<BurgerableNavProps> = ({ menuItems }) => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(isInitiallyScrolled());
    const theme = useContext(ThemeContext);
    const isLargeScreen = useMediaQueryEffect(
        `(min-width: ${theme.breakpoints.lg})`
    );

    useEscapePressEffect(() => setOpen(false));

    useScrollPosition(
        ({ prevPos, currPos }) => {
            if (
                currPos.y < SCROLL_ACTIVATION_THRESHHOLD &&
                prevPos.y >= SCROLL_ACTIVATION_THRESHHOLD
            ) {
                console.log('Set scrolled to true');
                
                setScrolled(true);
            } else if (
                currPos.y >= SCROLL_ACTIVATION_THRESHHOLD &&
                prevPos.y < SCROLL_ACTIVATION_THRESHHOLD
            ) {
                console.log('Set scrolled to false');

                setScrolled(false);
            }
        },
        [isScrolled],
        null,
        false,
        300
    );

    console.log(isScrolled);
    

    return (
        <div>
            <FocusLock disabled={!open}>
                <AnimateSharedLayout>
                    <NavBar layout>
                        <AnimatePresence>
                            {isLargeScreen && !isScrolled && (
                                <HeaderMenu
                                    key="header-menu"
                                    items={menuItems}
                                />
                            )}
                        </AnimatePresence>
                        <AnimatePresence>
                            {(isScrolled || !isLargeScreen) && (
                                <BurgerButton
                                    key="burger-button"
                                    open={open}
                                    setOpen={setOpen}
                                    aria-controls={menuId}
                                />
                            )}
                        </AnimatePresence>
                    </NavBar>
                </AnimateSharedLayout>
                <AnimatePresence>
                    {open && (
                        <SideMenuWrapper setOpen={setOpen}>
                            <SideMenu
                                id={menuId}
                                items={menuItems}
                                setOpen={setOpen}
                            />
                        </SideMenuWrapper>
                    )}
                </AnimatePresence>
            </FocusLock>
        </div>
    );
};

export default BurgerableNav;
