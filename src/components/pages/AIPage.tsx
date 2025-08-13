import React from 'react';
import { Brain, Cpu, Camera, Zap, Database, Network, Code, BarChart, Play } from 'lucide-react';

interface AIPageProps {
  onNavigateToInterface: () => void;
}

const AIPage: React.FC<AIPageProps> = ({ onNavigateToInterface }) => {
  const technologies = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Deep learning models with LSTM and CNN architectures for gesture recognition",
      details: ["Recurrent Neural Networks", "Convolutional Layers", "Attention Mechanisms"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Advanced hand tracking and pose estimation using MediaPipe and OpenCV",
      details: ["Hand Landmark Detection", "Pose Estimation", "Real-time Processing"],
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Database,
      title: "Training Data",
      description: "Extensive datasets with thousands of sign language samples and annotations",
      details: ["50K+ Gesture Samples", "Multi-language Support", "Continuous Learning"],
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Zap,
      title: "Real-time Inference",
      description: "Optimized model deployment for instant prediction and smooth user experience",
      details: ["< 15ms Latency", "Edge Computing", "GPU Acceleration"],
      color: "from-blue-700 to-blue-800"
    }
  ];

  const pipeline = [
    { step: 1, title: "Images Capture", description: "Capture and collect sign language gesture images", icon: Camera },
    { step: 2, title: "Model Training", description: "Train deep learning models on captured datasets", icon: Brain },
    { step: 3, title: "Testing Model", description: "Validate and test model accuracy and performance", icon: BarChart },
    { step: 4, title: "Final Processing", description: "Optimize model for real-time inference", icon: Code },
    { step: 5, title: "Deployment", description: "Deploy trained model to production environment", icon: Zap }
  ];

  const metrics = [
    { label: "Model Accuracy", value: "98.7%", description: "On validation dataset" },
    { label: "Processing Speed", value: "15ms", description: "Average inference time" },
    { label: "Model Size", value: "12.3MB", description: "Optimized for deployment" },
    { label: "Training Data", value: "50K+", description: "Gesture samples used" }
  ];

  return (
    <div className="p-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-900 mb-8">AI Technology</h1>
        <p className="text-2xl text-blue-700 leading-relaxed mb-12">
          Explore the cutting-edge artificial intelligence and machine learning technologies 
          powering Web Echoes' real-time sign language recognition system.
        </p>
        <button
          onClick={onNavigateToInterface}
          className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-6 rounded-3xl font-bold text-2xl transition-all duration-200 flex items-center gap-6 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          🚀 Run the Model
        </button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-3xl p-10 border border-blue-200 text-center hover:border-blue-300 transition-all duration-200">
            <div className="text-5xl font-bold text-blue-600 mb-4">
              {metric.value}
            </div>
            <div className="font-bold text-blue-900 mb-3 text-xl">{metric.label}</div>
            <div className="text-blue-600 text-lg">{metric.description}</div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Core Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-12 border border-blue-200 hover:border-blue-300 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${tech.color} rounded-2xl mb-8`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-6">{tech.title}</h3>
                <p className="text-blue-700 mb-8 leading-relaxed text-xl">{tech.description}</p>
                <ul className="space-y-4">
                  {tech.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-blue-600 flex items-center gap-4 text-lg">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Processing Pipeline */}
      <div className="bg-white rounded-3xl p-16 border border-blue-200 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-16 text-center">Processing Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {pipeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-blue-50 rounded-3xl p-10 border border-blue-200 hover:border-blue-300 transition-all duration-200">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-blue-900 mb-4 text-xl">{item.title}</h3>
                  <p className="text-blue-700 leading-relaxed text-lg">{item.description}</p>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-blue-300 transform -translate-y-1/2 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-blue-600 rounded-3xl p-16 text-white max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-12">Technical Innovation</h2>
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="font-bold mb-4 text-2xl">Advanced Architecture</h4>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Our hybrid model combines CNN layers for spatial feature extraction with LSTM networks 
                  for temporal sequence modeling, achieving state-of-the-art accuracy.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="font-bold mb-4 text-2xl">Real-time Optimization</h4>
                <p className="text-blue-100 leading-relaxed text-lg">
                  Model quantization and pruning techniques reduce computational overhead while maintaining 
                  high accuracy for smooth real-time performance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="font-bold mb-4 text-2xl">Continuous Learning</h4>
                <p className="text-blue-100 leading-relaxed text-lg">
                  The system incorporates user feedback and new data to continuously improve recognition 
                  accuracy and adapt to individual signing styles.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16">
              <Cpu className="w-32 h-32 mx-auto mb-8 text-blue-200" />
              <h3 className="text-4xl font-bold mb-8">AI at the Core</h3>
              <p className="text-blue-100 leading-relaxed text-xl">
                Every aspect of Web Echoes is powered by artificial intelligence, from gesture recognition 
                to natural language processing, creating a seamless communication bridge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPage;