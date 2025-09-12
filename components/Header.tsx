import React, { useState, useEffect } from 'react';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
];

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        
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

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-neutral-900/80 backdrop-blur-sm border-b border-teal-500/20 shadow-lg shadow-teal-500/10' : 'bg-transparent'}`}>
            <nav className="container mx-auto max-w-screen-xl px-6 md:px-12 lg:px-8">
                <ul className="flex items-center justify-center h-16 space-x-4 md:space-x-8">
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
            </nav>
        </header>
    );
};

export default Header;