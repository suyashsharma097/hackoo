import React, { useState, useEffect } from 'react';
import { Brain, Camera, Zap, Database, Users, BarChart3 } from 'lucide-react';

const Loader: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    { icon: Brain, text: "Initializing AI Models", description: "Loading neural networks..." },
    { icon: Camera, text: "Setting up Computer Vision", description: "Preparing camera systems..." },
    { icon: Database, text: "Connecting to Statistics API", description: "Fetching global data..." },
    { icon: Users, text: "Loading Community Data", description: "Gathering user insights..." },
    { icon: BarChart3, text: "Preparing Analytics", description: "Setting up dashboards..." },
    { icon: Zap, text: "Finalizing Setup", description: "Almost ready..." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 40);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) return steps.length - 1;
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, []);

  const CurrentIcon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md w-full">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin border-t-white mx-auto mb-6"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-r-purple-400 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <CurrentIcon className="w-8 h-8 text-white animate-pulse" />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">{steps[currentStep].text}</h2>
          <p className="text-white/80 mb-4">{steps[currentStep].description}</p>
          
          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div 
              className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/70 text-sm">{Math.round(progress)}% Complete</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div 
                key={index}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  index <= currentStep 
                    ? 'bg-white/20 text-white' 
                    : 'bg-white/5 text-white/40'
                }`}
              >
                <StepIcon className="w-4 h-4 mx-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Loader;