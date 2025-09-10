import React from 'react';
import { EXPERIENCE } from '../constants';
import ExperienceItem from './ExperienceItem';

const Experience: React.FC = () => {
    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Work experience">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">Experience</h2>
            <ol>
                {EXPERIENCE.map((exp, index) => (
                    <ExperienceItem key={index} experience={exp} />
                ))}
            </ol>
        </section>
    );
};

export default Experience;