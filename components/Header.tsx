import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Get In Touch' },
];

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        const sections = navLinks.map(link => document.querySelector(link.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-neutral-900/80 backdrop-blur-sm border-b border-teal-500/20 shadow-lg shadow-teal-500/10' : 'bg-transparent'}`}>
            <nav className="container mx-auto max-w-screen-xl px-6 md:px-12 lg:px-8">
                <div className="flex items-center justify-between md:justify-center h-16">
                    <div className="md:hidden">
                        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); closeMobileMenu(); }} className="text-xl font-bold tracking-wider text-slate-200">
                           BN
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center justify-center space-x-4 md:space-x-8">
                       {navLinks.map(link => (
                        <li key={link.href}>
                            <a 
                                href={link.href}
                                className={`text-sm font-medium transition-all duration-300 relative group ${
                                    activeSection === link.href.substring(1) 
                                        ? 'text-teal-400' 
                                        : 'text-slate-300 hover:text-teal-400'
                                }`}
                            >
                                {link.label}
                                <span className={`absolute bottom-[-4px] left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${
                                    activeSection === link.href.substring(1) ? 'scale-x-100' : ''
                                }`}></span>
                            </a>
                        </li>
                    ))}
                    </ul>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu, show/hide based on menu state. */}
            <div className={`md:hidden absolute top-16 left-0 w-full bg-neutral-900/95 backdrop-blur-sm transition-all duration-500 ease-in-out transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`} id="mobile-menu">
                <ul className="flex flex-col items-center divide-y divide-slate-700/50">
                    {navLinks.map(link => (
                        <li key={link.href} className="w-full">
                            <a
                                href={link.href}
                                onClick={closeMobileMenu}
                                className={`block w-full text-center py-4 font-medium transition-all duration-300 text-base ${
                                    activeSection === link.href.substring(1)
                                        ? 'text-teal-400 bg-teal-900/20'
                                        : 'text-slate-300 hover:text-teal-400 hover:bg-neutral-800'
                                }`}
                                aria-current={activeSection === link.href.substring(1) ? 'page' : undefined}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;