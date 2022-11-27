import { useState } from "react";
import Logo from "@/assets/logo.svg";
import Avatar from "@/assets/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const MainHeader = () => {
    const [navClass, setNavClass] = useState(
        "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0"
    );

    const handleOpenMenu = () => {
        setNavClass(
            "absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-8 bg-white p-8 font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0"
        );
    };
    const handleCloseMenu = () => {
        setNavClass(
            "hidden font-bold md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0"
        );
    };

    return (
        <>
            {/* Header */}
            <header className="container mx-auto flex items-center gap-8 p-4 py-6 md:p-0 md:py-0">
                {/* Hamburguesa y logo */}
                <button className="md:hidden" onClick={handleOpenMenu}>
                    <MenuIcon />
                </button>
                <img
                    src={Logo}
                    alt="Logo sneakers"
                    className="mr-auto mb-1 md:mr-0"
                />
                {/* Barra de navegacion */}
                <nav className={navClass}>
                    <button>
                        <CloseIcon
                            className="mb-8 md:hidden"
                            onClick={handleCloseMenu}
                        />
                    </button>
                    <NavLinkHeader text="Collections" />
                    <NavLinkHeader text="Men" />
                    <NavLinkHeader text="Women" />
                    <NavLinkHeader text="About" />
                    <NavLinkHeader text="Contact" />
                </nav>
                {/* Carrito y avatar */}
                <div className="flex gap-4">
                    <button>
                        <CartIcon />
                    </button>
                    <img src={Avatar} alt="Imagen de avatar" className="w-10" />
                </div>
            </header>
            <span className="container mx-auto h-[1px] w-full bg-gray-500 md:block"></span>
        </>
    );
};

export default MainHeader;
