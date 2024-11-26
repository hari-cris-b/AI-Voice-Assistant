import React from 'react';

export default function Demo() {
  return (
    <div id="demo" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Experience the AI Assistant
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Try our interactive demo powered by VectorShift AI
          </p>
        </div>
        
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://app.vectorshift.ai/voicebots/embedded/673c7a21750bf315d739ab78"
              width="100%"
              height="700px"
              allow="microphone"
              className="border-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}