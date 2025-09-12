import React from 'react';
import { GITHUB_ICON, LINKEDIN_ICON } from '../constants';

// Make TypeScript aware of the jsPDF library loaded on the window object
declare global {
    interface Window {
        jspdf: any;
    }
}

const Hero: React.FC = () => {

    /*const handleDownloadCv = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // --- CV Content ---
        const page_width = doc.internal.pageSize.getWidth();
        const center = page_width / 2;
        let y = 20;

        // Header
        doc.setFontSize(26);
        doc.setFont('helvetica', 'bold');
        doc.text("BANELE NKAMBULE", center, y, { align: 'center' });
        y += 8;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text("Mbombela, Mpumalanga | 076 748 0230 | banelemiles17@gmail.com", center, y, { align: 'center' });
        y += 5;
        doc.setLineWidth(0.5);
        doc.line(20, y, page_width - 20, y);
        y += 10;
        
        // Summary
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Summary", 20, y);
        y += 7;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        const summaryText = "Highly motivated and adaptable recent graduate with a diploma in ICT looking for a job in IT. Eager to work hard, willing to contribute in a professional setting and committed to continuous growth. Excited to apply myself to help drive success in a dynamic IT environment, constantly improving as a problem solver and working under pressure.";
        const summaryLines = doc.splitTextToSize(summaryText, page_width - 40);
        doc.text(summaryLines, 20, y);
        y += summaryLines.length * 5 + 5;

        // Experience
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Work Experience", 20, y);
        y += 7;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("Digital Associate Intern - Capaciti", 20, y);
        doc.text("Jul 2024 - Present", page_width - 20, y, { align: 'right'});
        y += 6;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text("- Learned how to prompt LLMs to create applications.", 25, y);
        y += 5;
        doc.text("- Assisted in the development and testing of various projects.", 25, y);
        y += 5;
        doc.text("- Learned how to create no-code chatbots.", 25, y);
        y += 5;
        doc.text("- Improved communication, time management, and teamworking skills.", 25, y);
        y += 10;
        
        // Education
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Education", 20, y);
        y += 7;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("University of Mpumalanga", 20, y);
        doc.text("2024", page_width - 20, y, { align: 'right'});
        y += 6;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text("Diploma in Information Communication Technology in Applications Development", 20, y);
        y += 10;
        
        // Skills
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("Skills", 20, y);
        y += 7;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text("Technical: Troubleshooting Capabilities, Technical Support, Microsoft 365", 20, y);
        y += 6;
        doc.text("Soft Skills: Attention to detail, Strong organizational skills, Effective communicator, Analytical Skills", 20, y);
        y += 10;

        // References
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text("References", 20, y);
        y += 7;
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        doc.text("Langton Mabvongodzi - Beacon College, Malelane (HoD and Educator) - 079 119 5062", 20, y);

        // --- End of Content ---
        
        doc.save("Banele_Nkambule_CV.pdf");
    };*/
    const handleDownloadCv = () => {
        const link = document.createElement('a');
        link.href = `${import.meta.env.BASE_URL}files/BaneleNkambule2024CandidateCV.pdf`; // Adjust path as needed
        link.download = 'BaneleNkambule.pdf'; // This is the name the file will be saved as
        document.body.appendChild(link); // Optional, but safer in some browsers
        link.click();
        document.body.removeChild(link); // Clean up
    };

    return (
        <section className="flex flex-col items-center justify-center text-center py-20 md:py-28 px-6">
            <div style={{ animationDelay: '100ms' }} className="animate-fadeInUp opacity-0 mb-6">
                <img
                    src={`${import.meta.env.BASE_URL}images/IMG.jpg`}
                    alt="Banele Miles Nkambule"
                    className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover border-4 border-teal-500/30 shadow-2xl shadow-teal-500/20"
                />
            </div>

            <h1 style={{ animationDelay: '200ms' }} className="text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl animate-fadeInUp opacity-0">
                Banele Miles Nkambule
            </h1>
            <h2 style={{ animationDelay: '300ms' }} className="mt-2 text-lg font-medium tracking-tight text-slate-200 sm:text-2xl animate-fadeInUp opacity-0">
                <span className="text-teal-400">
                    IT Graduate & Aspiring Data Analyst
                </span>
            </h2>
            <p style={{ animationDelay: '400ms' }} className="mt-3 max-w-xl leading-normal text-slate-400 animate-fadeInUp opacity-0">
                Passionate about solving complex problems with technology.
            </p>

            <div style={{ animationDelay: '500ms' }} className="mt-8 flex flex-col sm:flex-row items-center gap-6 animate-fadeInUp opacity-0">
                <button
                    onClick={handleDownloadCv}
                    className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/40 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-neutral-900"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download CV
                </button>

                
            </div>
        </section>
    );
};

export default Hero;