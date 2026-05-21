import React from 'react';
export default function Footer(): React.ReactElement {
  return (
    <footer className="px-16 py-8 border-t border-rose-mid/15 flex justify-between items-center text-xs text-text-light bg-cream">
      <span className="font-serif text-lg font-light text-rose-dark">Dev.</span>
      <span>© {new Date().getFullYear()} · Built with React, TypeScript & Tailwind</span>
    </footer>
  );
}
