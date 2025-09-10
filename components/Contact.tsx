import React from 'react';

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-teal-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Contact: React.FC = () => {
    return (
        <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="Contact">
            <div className="text-center flex flex-col items-center">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-4">Get In Touch</h2>
                <p className="mt-4 leading-relaxed text-slate-400 mb-8 max-w-2xl">
                    I'm always excited to discuss new opportunities, collaborate on data projects, or simply connect with fellow tech enthusiasts. Let's create something amazing together!
                </p>

                <div className="flex flex-col items-center space-y-6 mt-4">
                    <a href="mailto:banelemiles17@gmail.com" className="group inline-flex items-center text-lg font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors duration-300">
                        <EmailIcon />
                        <span>banelemiles17@gmail.com</span>
                    </a>
                    <a href="tel:0767480230" className="group inline-flex items-center text-lg font-medium text-slate-300 hover:text-teal-400 focus-visible:text-teal-400 transition-colors duration-300">
                        <PhoneIcon />
                        <span>076 748 0230</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;