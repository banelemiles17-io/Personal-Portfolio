import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON, EMAIL_ICON, CONTACT_ICON, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Contact">
            <div className="text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-4">Get In Touch</h2>
                
                <p className="max-w-xl mx-auto mb-8 text-slate-400">
                    I'm always excited to discuss new opportunities, collaborate on data projects, or simply connect with fellow tech enthusiasts. Let's create something amazing together!
                </p>

                <div className="flex items-center gap-10" aria-label="Social media">
                    <a className="block text-slate-400 hover:text-teal-300 transition-all duration-300 ease-in-out transform hover:scale-125" href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub (opens in a new tab)">
                        {GITHUB_ICON}
                    </a>
                    <a className="block text-slate-400 hover:text-teal-300 transition-all duration-300 ease-in-out transform hover:scale-125" href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)">
                        {LINKEDIN_ICON}
                    </a>
                    <a className="block text-slate-400 hover:text-teal-300 transition-all duration-300 ease-in-out transform hover:scale-125" href={SOCIAL_LINKS.email} aria-label="Email (opens in your mail client)">
                        {EMAIL_ICON}
                    </a>
                    <a className="block text-slate-400 hover:text-teal-300 transition-all duration-300 ease-in-out transform hover:scale-125" href={SOCIAL_LINKS.contact} aria-label="Contact (opens in your phone app)">
                        {CONTACT_ICON}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;