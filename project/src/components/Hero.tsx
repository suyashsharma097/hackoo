import React from 'react';
import { Camera, Brain, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Real-Time Sign Language
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Detection & Translation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Breaking communication barriers with AI-powered sign language recognition. 
            Our advanced computer vision system provides instant translation of sign language gestures.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <Camera className="w-6 h-6 text-indigo-600" />
              <span className="font-semibold text-gray-800">Real-time Camera</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <Brain className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-gray-800">AI Recognition</span>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <Zap className="w-6 h-6 text-pink-600" />
              <span className="font-semibold text-gray-800">Instant Translation</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <img 
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Sign language communication"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowering Communication</h3>
              <p className="text-gray-600 leading-relaxed">
                Our system uses advanced machine learning algorithms trained on comprehensive sign language datasets 
                to provide accurate real-time translation, making communication accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;