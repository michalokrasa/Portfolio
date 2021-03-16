import React, { useState } from "react";
import FocusLock from "react-focus-lock";
import { AnimatePresence } from "framer-motion";
import { MenuItem, MenuWrapper, BurgerButton, Menu } from ".";

const MenuItems: MenuItem[] = [
    {
        name: "About me",
        href: "#introduction",
    },
    {
        name: "Projects",
        href: "#projects",
    },
    {
        name: "Skills",
        href: "#skills",
    },
    {
        name: "Contact",
        href: "#contact",
    },
];
const menuId = "burger-nav";

const BurgerNav: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div>
            <FocusLock disabled={!open}>
                <BurgerButton
                    open={open}
                    setOpen={setOpen}
                    aria-controls={menuId}
                />
                <AnimatePresence>
                    {open && (
                        <MenuWrapper setOpen={setOpen}>
                            <Menu
                                id={menuId}
                                items={MenuItems}
                                setOpen={setOpen}
                            />
                        </MenuWrapper>
                    )}
                </AnimatePresence>
            </FocusLock>
        </div>
    );
};

export default BurgerNav;
