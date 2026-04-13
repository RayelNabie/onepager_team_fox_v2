import Image from 'next/image';
import Link from 'next/link';
import LogoIcon from '../public/Logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar" data-testid="navbar">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <Link href="/">
                        <Image src={LogoIcon} alt="Fox Logo" width={80} height={80} priority />
                    </Link>
                </div>

                <ul className="navbar__menu" data-testid="navbar-menu">
                    <li><Link href="#team" className="navbar__link">Het Team</Link></li>
                    <li><Link href="#situaties" className="navbar__link">Huidige & Gewenste situatie</Link></li>
                    <li><Link href="#ontwerpvraag" className="navbar__link">Ontwerpvraag</Link></li>
                    <li><Link href="#proces" className="navbar__link">Sprintplanning</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;