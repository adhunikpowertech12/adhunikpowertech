"use client"
import React, { useEffect, useState, useCallback } from 'react';

// LockIcon and Toast components remain the same...
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const Toast = ({ message, show, onDismiss }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  if (!show) return null;

  return (
    <div className="z-50 fixed bottom-5 right-5 bg-red-600 text-white py-3 px-5 rounded-lg shadow-xl animate-pulse">
      <p className="font-semibold">{message}</p>
    </div>
  );
};


export default function Security() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Function to display the toast notification
  const triggerToast = useCallback((message) => {
    setToastMessage(message);
    setShowToast(true);
  }, []);

  // --- DESKTOP SPECIFIC HANDLERS ---

  /**
   * Disables the right-click context menu (for desktop).
   */
  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    triggerToast('Right-clicking is disabled on this page.');
  }, [triggerToast]);

  /**
   * Disables specific keyboard shortcuts (for desktop).
   */
  const handleKeyDown = useCallback((event) => {
    // Check for common shortcuts for copy, paste, view source, etc.
    const isCtrlOrMeta = event.ctrlKey || event.metaKey;
    const key = event.key.toLowerCase();

    if (isCtrlOrMeta && ['c', 'v', 'a', 'u', 's', 'p'].includes(key)) {
      event.preventDefault();
      const actions = {
        c: 'Copying', v: 'Pasting', a: 'Selecting all',
        u: 'Viewing source', s: 'Saving', p: 'Printing'
      };
      triggerToast(`${actions[key]} is not allowed.`);
    }

    if (isCtrlOrMeta && event.shiftKey && ['i', 'j'].includes(key)) {
      event.preventDefault();
      triggerToast('Developer tools are disabled.');
    }
    
    if (event.key === 'F12' || event.key === 'Insert') {
      event.preventDefault();
      triggerToast('This action is disabled.');
    }
  }, [triggerToast]);

  // --- MOBILE & UNIVERSAL HANDLERS ---
  
  /**
   * Disables copy, cut, and paste actions universally.
   * These events fire on iOS when a user tries to copy from the long-press menu.
   */
  const handleCopy = useCallback((event) => {
    event.preventDefault();
    triggerToast('Copying content is not allowed.');
  }, [triggerToast]);

  const handlePaste = useCallback((event) => {
    event.preventDefault();
    triggerToast('Pasting content is not allowed.');
  }, [triggerToast]);
  
  const handleCut = useCallback((event) => {
    event.preventDefault();
    triggerToast('Cutting content is not allowed.');
  }, [triggerToast]);


  useEffect(() => {
    // Add all event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    document.addEventListener('cut', handleCut);

    // Cleanup function to remove listeners
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      document.removeEventListener('cut', handleCut);
    };
  }, [handleContextMenu, handleKeyDown, handleCopy, handlePaste, handleCut]);

  return (
    // We apply the CSS directly to the main div to disable selection
    <div 
      style={{
        WebkitTouchCallout: 'none', // Prevents the callout menu on long-press (iOS)
        WebkitUserSelect: 'none',   // Prevents text selection in Safari
        KhtmlUserSelect: 'none',    // For older browsers
        MozUserSelect: 'none',      // For Firefox
        msUserSelect: 'none',       // For Internet Explorer/Edge
        userSelect: 'none',         // Standard syntax
      }}
    >
       {/* All your page content goes here */}
      

      <Toast 
        message={toastMessage} 
        show={showToast} 
        onDismiss={() => setShowToast(false)} 
      />
    </div>
  );
}