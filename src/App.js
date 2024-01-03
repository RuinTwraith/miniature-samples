import React, { useState, useEffect, lazy, Suspense } from 'react';
import './style.css';
import Home from './components/Home';

export default function App() {
  return (
    <div className="p-2">
      <Home defaultTab={5} />
    </div>
  );
}
