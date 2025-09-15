import React, { useState, useEffect } from 'react';
import { CERTIFICATES } from '../constants';
import CertificateCard from './CertificateCard';
import type { Certificate } from '../types';

// --- CertificateModal Component ---
interface CertificateModalProps {
    isOpen: boolean;
    onClose: () => void;
    certificate: Certificate | null;
}

const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, certificate }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen || !certificate) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 animate-fadeIn"
            aria-labelledby="certificate-modal-title"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div 
                className="relative bg-neutral-900 rounded-lg shadow-2xl w-full max-w-3xl mx-4 my-8 p-6 transform transition-all duration-300 animate-fadeInUp border border-teal-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 id="certificate-modal-title" className="text-xl font-bold text-slate-100">{certificate.title}</h3>
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="mb-6 max-h-[60vh] overflow-y-auto rounded-lg border border-neutral-700">
                    <img src={certificate.imageUrl} alt={`Certificate for ${certificate.title}`} className="w-full h-auto object-contain rounded-md" />
                </div>
                
                <a 
                    href={certificate.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/40 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                    Verify Certificate
                </a>
            </div>
        </div>
    );
};

const Certificates: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const INITIAL_VISIBLE_COUNT = 3;

    const visibleCertificates = isExpanded ? CERTIFICATES : CERTIFICATES.slice(0, INITIAL_VISIBLE_COUNT);

    const handleViewCertificate = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCertificate(null);
    };

    return (
        <>
            <section id="certificates" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Certificates and Badges">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">Certificates & Badges</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {visibleCertificates.map((certificate, index) => (
                        <CertificateCard key={index} certificate={certificate} onViewClick={handleViewCertificate} />
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
            <CertificateModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                certificate={selectedCertificate}
            />
        </>
    );
};

export default Certificates;