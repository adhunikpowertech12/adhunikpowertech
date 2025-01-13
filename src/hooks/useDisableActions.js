"use client"
// hooks/useDisableActions.js
useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert('Content is protected');
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === 'u') || (e.ctrlKey && e.key === 'p')) {
        e.preventDefault();
        alert('Content is protected');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
