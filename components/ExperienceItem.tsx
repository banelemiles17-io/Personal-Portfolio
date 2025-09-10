import React from 'react';
import type { Experience } from '../types';

interface ExperienceItemProps {
    experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
    return (
        <li className="mb-12 transition-all duration-300 ease-in-out">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-neutral-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={experience.period}>
                    {experience.period}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                            <span className="inline-block font-bold group-hover:text-teal-400 transition-colors duration-300">
                                {experience.role} · {experience.company}
                            </span>
                        </div>
                    </h3>
                    <ul className="mt-2 list-disc list-inside text-slate-400 space-y-2">
                        {experience.description.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                    <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                        {experience.technologies.map(tech => (
                            <li key={tech} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-teal-900/30 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                    {tech}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </li>
    );
};

export default ExperienceItem;