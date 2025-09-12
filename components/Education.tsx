import React from 'react';
import { QUALIFICATION_URL } from '../constants';

const Education: React.FC = () => {
    return (
        <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Education">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">Education</h2>
            <a 
                href={QUALIFICATION_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-6 rounded-lg bg-neutral-900/50 hover:bg-neutral-900/80 border border-transparent hover:border-teal-500/30 transition-all duration-300 group"
                aria-label="View qualification details for Diploma in ICT"
            >
                <h3 className="font-bold text-xl text-slate-200 group-hover:text-teal-400 transition-colors duration-300">
                    University of Mpumalanga
                </h3>
                <p className="mt-2 text-slate-300">
                    Diploma in Information Communication Technology in Applications Development
                </p>
                <p className="mt-2 text-sm text-slate-400">
                    Completed 2024
                </p>
            </a>
        </section>
    );
};

export default Education;
