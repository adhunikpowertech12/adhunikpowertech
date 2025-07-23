import React, { useEffect, useState, useCallback, useRef } from 'react';

// A simple and elegant SVG icon for the lock
const LockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// A reusable toast notification component
const Toast = ({ message, show, onDismiss }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 3000); // Auto-dismiss after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  if (!show) return null;

  return (
    <div className=" z-50 fixed bottom-5 right-5 bg-red-600 text-white py-3 px-5 rounded-lg shadow-xl animate-pulse">
      <p className="font-semibold">{message}</p>
    </div>
  );
};


export default function Security() {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const contentRef = useRef(null);

  // Function to display the toast notification
  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  /**
   * Disables the right-click context menu.
   * This function is attached to the `contextmenu` event.
   * @param {MouseEvent} event - The contextmenu event object.
   */
  const handleContextMenu = useCallback((event) => {
    event.preventDefault();
    triggerToast('Right-clicking is disabled on this page.');
  }, []);

  /**
   * Disables specific keyboard shortcuts.
   * This function is attached to the `keydown` event.
   * It checks for combinations like Ctrl+C, Ctrl+V, Ctrl+U, etc.
   * @param {KeyboardEvent} event - The keydown event object.
   */
  const handleKeyDown = useCallback((event) => {
    // Disable Ctrl+C (Copy)
    if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
      event.preventDefault();
      triggerToast('Copying content is not allowed.');
    }

    // Disable Ctrl+V (Paste)
    if ((event.ctrlKey || event.metaKey) && event.key === 'v') {
      event.preventDefault();
      triggerToast('Pasting content is not allowed.');
    }
    
    // Disable Ctrl+A (Select All)
    if ((event.ctrlKey || event.metaKey) && event.key === 'a') {
      event.preventDefault();
      triggerToast('Selecting all content is not allowed.');
    }

    // Disable Ctrl+U (View Source)
    if ((event.ctrlKey || event.metaKey) && event.key === 'u') {
      event.preventDefault();
      triggerToast('Viewing page source is disabled.');
    }
    
    // Disable Ctrl+S (Save Page)
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      event.preventDefault();
      triggerToast('Saving the page is disabled.');
    }
    
    // Disable Ctrl+P (Print Page)
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
      event.preventDefault();
      triggerToast('Printing is disabled.');
    }
    
    // Disable Ctrl+I (Developer Tools)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        triggerToast('Developer tools are disabled.');
    }
    
    // Disable Ctrl+J (Developer Tools)
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key === 'J') {
        event.preventDefault();
        triggerToast('Developer tools are disabled.');
    }

    // Disable F12 (Developer Tools)
    if (event.key === 'F12') {
      event.preventDefault();
      triggerToast('Developer tools are disabled.');
    }
    
    // Disable Insert key
    if (event.key === 'Insert') {
        event.preventDefault();
        triggerToast('The Insert key is disabled.');
    }
  }, []);

  useEffect(() => {
    // Add event listeners when the component mounts
    const contentElement = contentRef.current;
    if (contentElement) {
        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('keydown', handleKeyDown);
    }


    // Clean up event listeners when the component unmounts
    // This is crucial to prevent memory leaks in a React application
    return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleContextMenu, handleKeyDown]); // Re-run effect if handlers change

  return (
    <div className="">
      <div 
        ref={contentRef}
        className=""
      >
       
      </div>

      <Toast 
        message={toastMessage} 
        show={showToast} 
        onDismiss={() => setShowToast(false)} 
      />
    </div>
  );
}
