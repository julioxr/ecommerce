import { useState } from "react";
import Logo from "@/assets/logo.svg";
import Avatar from "@/assets/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";

const MainHeader = () => {
    const [navClass, setNavClass] = useState("");

    const handleOpenMenu = () => {
        console.log("Open Menu");
    };
    const handleCloseMenu = () => {
        console.log("Close Menu");
    };

    return (
        <header className="container mx-auto flex items-center gap-8 bg-gray-200 px-4 py-8">
            <button className="md:hidden" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>
            <img
                src={Logo}
                alt="Logo sneakers"
                className="mr-auto mb-1 md:mr-0"
            />
            <nav className="absolute top-0 left-0 flex h-full w-4/5 flex-col gap-y-8 bg-gray-300 p-8 font-bold md:mr-auto md:flex md:flex-row md:gap-4">
                <button>
                    <CloseIcon className="mb-8" onClick={handleCloseMenu} />
                </button>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="flex gap-4">
                <button>
                    <CartIcon />
                </button>
                <img src={Avatar} alt="Imagen de avatar" className="w-10" />
            </div>
        </header>
    );
};

export default MainHeader;
