"use client";
import React, { useState, useEffect } from 'react';

// --- Configuration ---
const QR_CODE_IMAGE_URL = "/linktree-qr.svg"; 

// --- ICONS ---

// Official Linktree Icon (Green Logo)
const LinktreeIcon = ({ size = 24 }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        shapeRendering="geometricPrecision" 
        textRendering="geometricPrecision" 
        imageRendering="optimizeQuality" 
        fillRule="evenodd" 
        clipRule="evenodd" 
        viewBox="0 0 417 512.238"
        width={size}
        height={size}
    >
        {/* We keep the official Green fill here */}
        <path 
            fill="#43E660" 
            fillRule="nonzero" 
            d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
        />
    </svg>
);

// Cross (X) Icon SVG
const CloseIcon = ({ size = 24 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width={size} height={size}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const LinktreeButton = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closePopup();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isPopupOpen) {
                closePopup();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isPopupOpen]);

    return (
        <>
            {/* The Floating Button */}
            <div className="fixed bottom-[166px] right-6 z-[999] group transition-all duration-500 hover:-translate-y-2">
                <div className="relative group/tooltip">
                    <button
                        onClick={openPopup}
                        // UPDATED: Changed bg-[#43E660] to bg-white. 
                        // Removed hover:bg-[#39D455] so it doesn't turn green and hide the logo.
                        className="w-14 h-14 bg-white hover:bg-gray-100 rounded-full p-2 shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/30 flex items-center justify-center border border-gray-100"
                        aria-label="Connect via Linktree"
                    >
                        {/* The Icon is Green (#43E660), so it will show up perfectly on the White button */}
                        <LinktreeIcon size={28} />
                    </button>
                    
                    {/* Tooltip */}
                    <span
                        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none shadow-sm"
                    >
                        Connect via Linktree
                    </span>
                </div>
            </div>
            
            {/* The Popup Modal */}
            {isPopupOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-[1000] bg-black/60"
                    onClick={handleBackdropClick}
                >
                    <div 
                        className="relative bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-11/12 mx-4 transition-transform duration-300 transform scale-100"
                        role="dialog"
                        aria-modal="true"
                    >
                        <button
                            onClick={closePopup}
                            className="absolute top-3 right-3 p-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full transition-colors duration-200"
                            aria-label="Close modal"
                        >
                            <CloseIcon size={20} />
                        </button>

                        <img
                            src={QR_CODE_IMAGE_URL}
                            alt="Scan to connect on Linktree"
                            width={400}
                            height={400}
                            className="w-full h-auto rounded-xl shadow-sm border border-gray-100"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400/EF4444/FFFFFF?text=Image+Error"; }}
                        />
                        
                        <p className="text-center text-sm text-gray-500 mt-4">
                            Scan the QR to connect with us via Linktree.
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LinktreeButton;