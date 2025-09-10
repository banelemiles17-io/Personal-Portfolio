import React, { useState } from 'react';
import { CERTIFICATES } from '../constants';
import CertificateCard from './CertificateCard';

const Certificates: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const INITIAL_VISIBLE_COUNT = 3;

    const visibleCertificates = isExpanded ? CERTIFICATES : CERTIFICATES.slice(0, INITIAL_VISIBLE_COUNT);

    return (
        <section id="certificates" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Certificates and Badges">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">Certificates & Badges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleCertificates.map((certificate, index) => (
                    <CertificateCard key={index} certificate={certificate} />
                ))}
            </div>
            {CERTIFICATES.length > INITIAL_VISIBLE_COUNT && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="group inline-flex items-center font-semibold leading-tight text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors duration-300"
                        aria-expanded={isExpanded}
                    >
                        <span>{isExpanded ? 'Show Less' : 'Show All'}</span>
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 20 20" 
                            fill="currentColor" 
                            className={`ml-2 h-5 w-5 transform transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                        >
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            )}
        </section>
    );
};

export default Certificates;