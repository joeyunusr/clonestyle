import React, { useEffect } from 'react';

export default function SecurityLayer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Layer 1: Disable Context Menu (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Layer 2: Disable Developer Tools and View Source Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Ctrl+Shift+I / Mac: Cmd+Option+I (DevTools)
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i'))
      ) {
        e.preventDefault();
      }
      // Ctrl+Shift+J / Mac: Cmd+Option+J (DevTools Console)
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j'))
      ) {
        e.preventDefault();
      }
      // Ctrl+Shift+C / Mac: Cmd+Option+C (DevTools Inspect)
      if (
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c'))
      ) {
        e.preventDefault();
      }
      // Ctrl+U / Mac: Cmd+Option+U (View Source)
      if (
        (e.ctrlKey && (e.key === 'U' || e.key === 'u')) ||
        (e.metaKey && e.altKey && (e.key === 'U' || e.key === 'u'))
      ) {
        e.preventDefault();
      }
      // Ctrl+S / Cmd+S (Save As)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
      }
      // Ctrl+P / Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && (e.key === 'P' || e.key === 'p')) {
        e.preventDefault();
      }
    };

    // Layer 3: Disable Dragging
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return (
    <div 
      className="security-layer-wrapper" 
      style={{
        WebkitUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        input, textarea {
          -webkit-user-select: text !important;
          -ms-user-select: text !important;
          user-select: text !important;
        }
      ` }} />
      {children}
    </div>
  );
}
