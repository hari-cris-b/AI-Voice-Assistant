import * as React from 'react';
import { Hotel, Bot, MessageSquare, Star, Clock, Globe, Shield } from 'lucide-react';
import Features from './components/Features';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">HotelAI Assistant</span>
            </div>
            <div className="flex space-x-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600">Demo</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <Hero />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;