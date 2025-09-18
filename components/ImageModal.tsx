import React, { useEffect } from 'react';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    title: string;
    actionButton?: React.ReactNode;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, title, actionButton }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300 animate-fadeIn"
            aria-labelledby="image-modal-title"
            role="dialog"
            aria-modal="true"
            onClick={onClose}
        >
            <div 
                className="relative bg-neutral-900 rounded-lg shadow-2xl w-full max-w-3xl mx-4 my-8 p-6 transform transition-all duration-300 animate-fadeInUp border border-teal-500/20"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 id="image-modal-title" className="text-xl font-bold text-slate-100">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                <div className="mb-6 max-h-[60vh] overflow-y-auto rounded-lg border border-neutral-700">
                    <img src={imageUrl} alt={`Content for ${title}`} className="w-full h-auto object-contain rounded-md" />
                </div>
                
                {actionButton && <div className="text-center">{actionButton}</div>}
            </div>
        </div>
    );
};

export default ImageModal;
