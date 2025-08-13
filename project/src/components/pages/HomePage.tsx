import React from 'react';
import { Camera, Brain, Zap, Shield, Globe, Users, Play, TrendingUp } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Camera,
      title: "Real-time Processing",
      description: "Instant recognition and translation of sign language gestures using advanced computer vision.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Recognition",
      description: "Deep learning models trained on extensive sign language datasets for high accuracy.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized algorithms ensuring minimal latency for seamless communication experience.",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All processing happens locally, ensuring your privacy and data security at all times.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for various sign language systems from different countries and regions.",
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built with feedback from the deaf and hard-of-hearing community for authentic experience.",
      color: "from-blue-500 to-purple-500"
    }
  ];

  const stats = [
    { label: "Recognition Accuracy", value: "98.7%", change: "+2.3%" },
    { label: "Processing Speed", value: "15ms", change: "-5ms" },
    { label: "Supported Gestures", value: "2,847", change: "+127" },
    { label: "Active Users", value: "12.4K", change: "+1.2K" }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Real-Time Sign Language
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Detection & Translation
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              SignVision bridges the gap between sign language and text using AI-powered real-time recognition. 
              Our advanced computer vision system provides instant translation of sign language gestures.
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2">
                <Play className="w-5 h-5" />
                Start Recognition
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Sign language communication"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-200">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-500">{stat.label}</h3>
              <TrendingUp className="w-4 h-4 text-green-500" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 group">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Sign Language</h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Visual Language</h4>
                <p className="text-gray-600 leading-relaxed">
                  Sign languages are expressed through manual articulation combined with non-manual markers, 
                  including facial expressions and body postures.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Rich Grammar</h4>
                <p className="text-gray-600 leading-relaxed">
                  Sign languages have their own syntax, morphology, and phonology, making them complete 
                  linguistic systems capable of expressing complex ideas.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Cultural Identity</h4>
                <p className="text-gray-600 leading-relaxed">
                  Beyond communication, sign languages are integral to Deaf culture and community identity, 
                  representing a rich heritage and shared experience.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Person using sign language"
              className="rounded-xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;