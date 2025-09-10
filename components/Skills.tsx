import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Technical Skills">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {SKILL_CATEGORIES.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-lg font-semibold text-slate-200 mb-4">{category.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span key={skill.name} className="inline-flex items-center px-3 py-1 text-sm font-medium leading-5 text-teal-300 bg-teal-900/30 rounded-full transition-all duration-300 ease-in-out transform hover:bg-teal-800/50 hover:text-white hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-1 cursor-pointer">
                                    {skill.icon}
                                    <span className="ml-2">{skill.name}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;