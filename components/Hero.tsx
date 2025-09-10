import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON } from '../constants';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center py-20 md:py-28 px-6">
            <div style={{ animationDelay: '100ms' }} className="animate-fadeInUp opacity-0 mb-6">
                <img
                    src="https://i.ibb.co/524SkC9/profile-pic.png"
                    alt="Banele Miles Nkambule"
                    className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20"
                />
            </div>
            
            <h1 style={{ animationDelay: '200ms' }} className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl animate-fadeInUp opacity-0">
                Banele Miles Nkambule
            </h1>
            <h2 style={{ animationDelay: '300ms' }} className="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-2xl animate-fadeInUp opacity-0">
                <span className="text-teal-400">
                    IT Graduate & Aspiring Data Analyst
                </span>
            </h2>
            <p style={{ animationDelay: '400ms' }} className="mt-3 max-w-xl leading-normal text-slate-400 animate-fadeInUp opacity-0">
                Passionate about solving complex problems with technology.
            </p>
            
            <div style={{ animationDelay: '500ms' }} className="mt-8 flex flex-col sm:flex-row items-center gap-6 animate-fadeInUp opacity-0">
                <a
                    href="/Banele_Nkambule_CV.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/40 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download CV
                </a>

                <ul className="flex items-center gap-8" aria-label="Social media">
                    <li className="text-xs shrink-0">
                        <a className="block text-slate-400 hover:text-teal-300 transition-all duration-300 ease-in-out transform hover:scale-125" href="#" target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
                            {GITHUB_ICON}
                        </a>
                    </li>
                    <li className="text-xs shrink-0">
                        <a className="block text-slate-400 hover:text-teal-300 transition-all duration-300 ease-in-out transform hover:scale-125" href="#" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
                            {LINKEDIN_ICON}
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Hero;