import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
                Coded in <a href="https://code.visualstudio.com/" className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400" target="_blank" rel="noreferrer">Visual Studio Code</a>. 
                Built with <a href="https://reactjs.org/" className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400" target="_blank" rel="noreferrer">React</a> &amp; <a href="https://tailwindcss.com/" className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400" target="_blank" rel="noreferrer">Tailwind CSS</a>, 
                and deployed with <a href="https://vercel.com/" className="font-medium text-slate-400 hover:text-teal-400 focus-visible:text-teal-400" target="_blank" rel="noreferrer">Vercel</a>.
            </p>
            <p className="mt-2">
                © {new Date().getFullYear()} Banele Miles Nkambule. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;