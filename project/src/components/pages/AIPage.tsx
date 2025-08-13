import React from 'react';
import { Brain, Cpu, Camera, Zap, Database, Network, Code, BarChart } from 'lucide-react';

const AIPage: React.FC = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Deep learning models with LSTM and CNN architectures for gesture recognition",
      details: ["Recurrent Neural Networks", "Convolutional Layers", "Attention Mechanisms"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Camera,
      title: "Computer Vision",
      description: "Advanced hand tracking and pose estimation using MediaPipe and OpenCV",
      details: ["Hand Landmark Detection", "Pose Estimation", "Real-time Processing"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Database,
      title: "Training Data",
      description: "Extensive datasets with thousands of sign language samples and annotations",
      details: ["50K+ Gesture Samples", "Multi-language Support", "Continuous Learning"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Zap,
      title: "Real-time Inference",
      description: "Optimized model deployment for instant prediction and smooth user experience",
      details: ["< 15ms Latency", "Edge Computing", "GPU Acceleration"],
      color: "from-blue-600 to-purple-500"
    }
  ];

  const pipeline = [
    { step: 1, title: "Video Input", description: "Capture video stream from camera", icon: Camera },
    { step: 2, title: "Preprocessing", description: "Extract and normalize hand landmarks", icon: Code },
    { step: 3, title: "Feature Extraction", description: "Convert landmarks to feature vectors", icon: Network },
    { step: 4, title: "Model Inference", description: "Predict gesture using trained model", icon: Brain },
    { step: 5, title: "Post-processing", description: "Apply smoothing and confidence filtering", icon: BarChart },
    { step: 6, title: "Output", description: "Display recognized text or action", icon: Zap }
  ];

  const metrics = [
    { label: "Model Accuracy", value: "98.7%", description: "On validation dataset" },
    { label: "Processing Speed", value: "15ms", description: "Average inference time" },
    { label: "Model Size", value: "12.3MB", description: "Optimized for deployment" },
    { label: "Training Data", value: "50K+", description: "Gesture samples used" }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Technology</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore the cutting-edge artificial intelligence and machine learning technologies 
          powering SignVision's real-time sign language recognition system.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 text-center hover:shadow-lg transition-all duration-200">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {metric.value}
            </div>
            <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
            <div className="text-sm text-gray-500">{metric.description}</div>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
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
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Processing Pipeline</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pipeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < pipeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Technical Innovation</h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Advanced Architecture</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Our hybrid model combines CNN layers for spatial feature extraction with LSTM networks 
                  for temporal sequence modeling, achieving state-of-the-art accuracy.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Real-time Optimization</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Model quantization and pruning techniques reduce computational overhead while maintaining 
                  high accuracy for smooth real-time performance.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Continuous Learning</h4>
                <p className="text-blue-100 text-sm leading-relaxed">
                  The system incorporates user feedback and new data to continuously improve recognition 
                  accuracy and adapt to individual signing styles.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <Cpu className="w-20 h-20 mx-auto mb-4 text-blue-200" />
              <h3 className="text-2xl font-bold mb-4">AI at the Core</h3>
              <p className="text-blue-100 leading-relaxed">
                Every aspect of SignVision is powered by artificial intelligence, from gesture recognition 
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