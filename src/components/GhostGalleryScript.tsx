'use client';

import { useEffect } from 'react';

/**
 * Script to automatically adjust Ghost Gallery images to having equal height
 * by setting the flex-grow value based on aspect ratio.
 */
export default function GhostGalleryScript() {
  useEffect(() => {
    const adjustGallery = () => {
        const images = document.querySelectorAll('.kg-gallery-image img');
        
        images.forEach((img) => {
            const container = img.closest('.kg-gallery-image') as HTMLElement;
            const width = img.getAttribute('width');
            const height = img.getAttribute('height');
            
            if (container && width && height) {
                const ratio = parseInt(width) / parseInt(height);
                // Ghost's standard formula: flex-grow = aspect ratio
                container.style.flex = `${ratio} 1 0%`;
            }
        });
    };

    // Run immediately
    adjustGallery();

    // Optional: Run on window resize if needed, though usually ratio stays constant
    window.addEventListener('resize', adjustGallery);
    return () => window.removeEventListener('resize', adjustGallery);
  }, []);

  return null;
}
