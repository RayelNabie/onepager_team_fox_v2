import Image from 'next/image';
import HillevlietBg from '../public/hillevliet.svg';

const Header = () => {
    return (
        <header className="header">
            <Image src={HillevlietBg}
                alt="Achtergrond Hillevliet"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -1 }}
                priority
            />
            <div className="header__tagline">
                <p>
                    Samen hier. <br/> <em>Niet alleen online.</em>
                </p>
            </div>
        </header>
    );
};

export default Header;