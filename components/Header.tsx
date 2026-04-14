import Image from 'next/image';
import HillevlietBg from '../public/hillevliet.svg';
import React, {type JSX} from "react";

const Header = (): JSX.Element => {
    return (
        <header className="header">

            {/* Hillevliet background image */}
            <Image src={HillevlietBg}
                   alt="Achtergrond Hillevliet"
                   fill
                   className="header_image"
                   priority
            />

            {/* Tagline */}
            <div className="header__tagline">
                <p className="header__tagline-text">
                    Samen hier. <br/> Niet alleen online.
                </p>
            </div>

        </header>
    );
};

export default Header;