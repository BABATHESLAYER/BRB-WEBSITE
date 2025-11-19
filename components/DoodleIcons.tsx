import React from 'react';

export const ZigZag = ({ className = "" }: { className?: string }) => (
  <svg width="100" height="20" viewBox="0 0 100 20" className={className} fill="none" stroke="currentColor" strokeWidth="4">
    <path d="M2 10 L10 2 L18 10 L26 2 L34 10 L42 2 L50 10 L58 2 L66 10 L74 2 L82 10 L90 2 L98 10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Spiral = ({ className = "" }: { className?: string }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" className={className} fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M30 30 C 35 30 35 35 30 35 C 25 35 25 25 30 25 C 40 25 40 40 30 40 C 15 40 15 20 30 20 C 50 20 50 50 30 50" strokeLinecap="round" />
  </svg>
);

export const StarBurst = ({ className = "" }: { className?: string }) => (
  <svg width="50" height="50" viewBox="0 0 50 50" className={className} fill="currentColor" stroke="black" strokeWidth="2">
    <path d="M25 0 L31 18 L50 18 L35 29 L41 48 L25 37 L9 48 L15 29 L0 18 L19 18 Z" />
  </svg>
);