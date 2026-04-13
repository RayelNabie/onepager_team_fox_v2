'use client';

import {useState, useEffect, type JSX} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LogoIcon from '../public/Logo.svg';

const Navbar: () => JSX.Element = (): JSX.Element => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect((): () => void => {
        const handleScroll: () => void = (): void => {
            const offset: number = window.pageYOffset || document.documentElement.scrollTop;

            if (offset > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return (): void => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect((): () => void => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return (): void => {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    const navbarClasses = `navbar ${isScrolled ? 'navbar--scrolled' : ''}`;
    const menuClasses = `navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`;
    const hamburgerClasses = `navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`;

    const closeMenu: () => void = (): void => setIsMenuOpen(false);
    const toggleMenu: () => void = (): void => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={navbarClasses}>
            <div className="navbar__container">

                {/* Logo */}
                <Link href="/" onClick={closeMenu}>
                    <Image src={LogoIcon} alt="Fox Logo" className="navbar__logo" priority/>
                </Link>

                {/* Mobile hamburger */}
                <button className={hamburgerClasses} onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="navbar__hamburger-line"></span>
                    <span className="navbar__hamburger-line"></span>
                    <span className="navbar__hamburger-line"></span>
                </button>

                {/* Desktop links */}
                <div className={menuClasses}>
                    <Link href="/#team" className="navbar__link" onClick={closeMenu}>Het Team</Link>
                    <Link href="/#situaties" className="navbar__link" onClick={closeMenu}>Huidige & Gewenste
                        situatie</Link>
                    <Link href="/#ontwerpvraag" className="navbar__link" onClick={closeMenu}>Ontwerpvraag</Link>
                    <Link href="/#proces" className="navbar__link" onClick={closeMenu}>Sprintplanning</Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;