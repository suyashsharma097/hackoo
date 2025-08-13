import React from 'react';
import { Camera, Cpu, Zap, Shield, Globe, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: "Real-time Processing",
      description: "Instant recognition and translation of sign language gestures using advanced computer vision.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "AI-Powered Recognition",
      description: "Deep learning models trained on extensive sign language datasets for high accuracy.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized algorithms ensuring minimal latency for seamless communication experience.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All processing happens locally, ensuring your privacy and data security at all times.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for various sign language systems from different countries and regions.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built with feedback from the deaf and hard-of-hearing community for authentic experience.",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our cutting-edge technology combines computer vision, machine learning, and user-centered design 
            to deliver an exceptional sign language translation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
              <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.color} rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical Innovation</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Computer Vision Pipeline</h4>
                    <p className="text-gray-600">Advanced hand tracking and pose estimation using MediaPipe and OpenCV.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Neural Network Architecture</h4>
                    <p className="text-gray-600">Custom LSTM and CNN models trained on thousands of sign language samples.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-indigo-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Real-time Inference</h4>
                    <p className="text-gray-600">Optimized model deployment for instant prediction and smooth user experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-12 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="AI and technology"
                className="rounded-xl shadow-2xl max-w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;