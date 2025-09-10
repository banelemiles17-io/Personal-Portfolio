import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="About me">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-8">About</h2>
            <div>
                <p className="text-slate-300">
                    As a recent IT graduate from the University of Mpumalanga, I am passionate about leveraging technology to create innovative solutions and am eager to apply my skills in a professional setting. I'm a quick learner, a collaborative team player, and I am actively seeking opportunities to contribute to projects and grow as a developer in the AI/ML and Data Analysis space.
                </p>
            </div>
        </section>
    );
};

export default About;