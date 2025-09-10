import React, { useState, FormEvent } from 'react';
import { generateCareerObjective } from '../services/geminiService';

const AICareerObjective: React.FC = () => {
    const [keywords, setKeywords] = useState('');
    const [objective, setObjective] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        setObjective('');
        try {
            const result = await generateCareerObjective(keywords);
            setObjective(result);
        } catch (err) {
            setError('Failed to generate objective. Please try again.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="ai-generator" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 p-6 md:p-8 rounded-xl bg-neutral-800/50 border border-teal-500/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-teal-500/20 hover:-translate-y-2 hover:border-teal-500/40" aria-label="AI Career Objective Generator">
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200 sm:text-3xl mb-4">
                <span className="text-teal-400">
                    AI-Powered
                </span> Career Objective
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400 mb-8">
                Demonstrating my skills with the Gemini API, this tool generates a professional career objective. Enter a few keywords related to your desired role or skills (e.g., "Deep Learning, NLP, Python") to see it in action.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="keywords" className="sr-only">Keywords</label>
                    <input
                        type="text"
                        id="keywords"
                        name="keywords"
                        value={keywords}
                        onChange={(e) => setKeywords(e.target.value)}
                        placeholder="Enter keywords..."
                        required
                        className="block w-full rounded-md border-2 border-slate-700 bg-slate-800/50 text-slate-300 shadow-sm focus:border-teal-500 focus:ring-teal-500/30 focus:ring-2 sm:text-sm p-3 transition-all duration-300"
                        aria-label="Keywords for career objective"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading || !keywords.trim()}
                    className="inline-flex justify-center items-center rounded-md bg-teal-600 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/40 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating...
                        </>
                    ) : 'Generate Objective'}
                </button>
            </form>

            {error && (
                <div className="mt-4 p-3 rounded-md bg-red-900/50 text-red-300 text-sm w-full" role="alert">
                    {error}
                </div>
            )}

            {objective && (
                 <div className="mt-6">
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">Generated Objective:</h3>
                    <blockquote className="p-4 border-l-4 border-teal-500 bg-slate-900/50 rounded-r-lg text-slate-300 italic">
                        {objective}
                    </blockquote>
                </div>
            )}

        </section>
    );
};

export default AICareerObjective;