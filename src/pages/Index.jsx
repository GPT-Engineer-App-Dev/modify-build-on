import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 overflow-hidden">
      <h1 className="text-white font-extrabold uppercase tracking-widest animate-pulse text-center" style={{ fontSize: '20vw', textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
        Hello
      </h1>
    </div>
  );
};

export default HomePage;