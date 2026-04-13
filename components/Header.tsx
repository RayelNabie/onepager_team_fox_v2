import Image from 'next/image';
import HillevlietBg from '../public/hillevliet.svg';

const Header = () => {
    return (
        <header className="header">
            <Image src={HillevlietBg}
                   alt="Achtergrond Hillevliet"
                   fill
                   className="header_image"
                   priority
            />
            <div className="header__tagline">
                <p className="header__tagline-text">
                    Samen hier. <br/> Niet alleen online.
                </p>
            </div>
        </header>
    );
};

export default Header;