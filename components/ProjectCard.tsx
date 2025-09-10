import React from 'react';
import type { Project } from '../types';

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
    </svg>
);

const LiveDemoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 0V6.375c0-.621.504-1.125 1.125-1.125H18m-4.5 0L18 6m-7.5 0h7.5" />
    </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div 
            className="group flex flex-col h-full rounded-lg bg-neutral-800/60 border border-teal-500/20 p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/30"
        >
            <h3 className="font-bold text-lg text-slate-200 group-hover:text-teal-400 transition-colors duration-300">
                {project.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2 flex-grow">{project.description}</p>
            <div className="mt-6 flex items-center gap-4 text-sm">
                {project.sourceCodeUrl && (
                    <a 
                        className="inline-flex items-center gap-2 rounded-md bg-slate-700/50 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-slate-700 hover:shadow-lg hover:shadow-slate-600/30 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900" 
                        href={project.sourceCodeUrl} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        aria-label={`Source Code for ${project.title} (opens in a new tab)`}
                    >
                       <GitHubIcon />
                       <span>GitHub</span>
                    </a>
                )}
                 {project.liveDemoUrl && (
                    <a 
                        className="inline-flex items-center gap-2 rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-500/40 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
                        href={project.liveDemoUrl} 
                        target="_blank" 
                        rel="noreferrer noopener" 
                        aria-label={`Live demo for ${project.title} (opens in a new tab)`}
                    >
                       <LiveDemoIcon />
                       <span>Live Demo</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;