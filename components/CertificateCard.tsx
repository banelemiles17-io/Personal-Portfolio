import React from 'react';
import type { Certificate } from '../types';

interface CertificateCardProps {
    certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
    return (
        <div 
            className="group flex flex-col justify-between items-start rounded-lg bg-neutral-800/60 border border-teal-500/20 p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/30"
        >
            <h3 className="font-bold text-lg text-slate-200 group-hover:text-teal-400 transition-colors duration-300 mb-4">
                {certificate.title}
            </h3>
            <a 
                href={certificate.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/40 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                aria-label={`View certificate for ${certificate.title}`}
            >
                View Certificate
            </a>
        </div>
    );
};

export default CertificateCard;