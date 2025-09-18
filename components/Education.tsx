import React, { useState } from 'react';
import { QUALIFICATION_URL } from '../constants';
import ImageModal from './ImageModal';

const Education: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <>
            <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Education">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">Education</h2>
                <div
                    onClick={handleOpenModal}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpenModal(); }}
                    role="button"
                    tabIndex={0}
                    className="block p-6 rounded-lg bg-neutral-900/50 hover:bg-neutral-900/80 border border-transparent hover:border-teal-500/30 transition-all duration-300 group cursor-pointer"
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
                </div>
            </section>
            <ImageModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                imageUrl={QUALIFICATION_URL}
                title="Diploma in ICT in Applications Development"
            />
        </>
    );
};

export default Education;
