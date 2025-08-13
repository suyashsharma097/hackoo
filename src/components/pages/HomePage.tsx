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
    <div className="p-12 space-y-16">
      {/* Hero Section */}
      <div className="bg-white rounded-3xl p-16 border border-blue-200 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl font-bold text-blue-900 mb-8">
              Real-Time Sign Language
              <span className="block text-blue-600">
                Detection & Translation
              </span>
            </h1>
            <p className="text-2xl text-blue-700 mb-12 leading-relaxed">
              Web Echoes bridges the gap between sign language and text using AI-powered real-time recognition. 
              Our advanced computer vision system provides instant translation of sign language gestures.
            </p>
            <div className="flex gap-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-semibold text-lg transition-all duration-200 flex items-center gap-4">
                <Play className="w-6 h-6" />
                Start Recognition
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-12 py-5 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Sign language communication"
              className="rounded-3xl w-full h-96 object-cover border border-blue-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-3xl p-10 border border-blue-200 hover:border-blue-300 transition-all duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-blue-600 text-lg">{stat.label}</h3>
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div className="flex items-end gap-4 mb-3">
              <span className="text-4xl font-bold text-blue-900">{stat.value}</span>
              <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-3xl hover:border-blue-300 transition-all duration-300 p-10 border border-blue-200 group">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">{feature.title}</h3>
              <p className="text-blue-700 leading-relaxed text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-3xl p-16 border border-blue-200 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold text-blue-900 mb-12">Understanding Sign Language</h2>
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-blue-800 mb-4">Visual Language</h4>
                <p className="text-blue-700 leading-relaxed text-xl">
                  Sign languages are expressed through manual articulation combined with non-manual markers, 
                  including facial expressions and body postures.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-800 mb-4">Rich Grammar</h4>
                <p className="text-blue-700 leading-relaxed text-xl">
                  Sign languages have their own syntax, morphology, and phonology, making them complete 
                  linguistic systems capable of expressing complex ideas.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-blue-800 mb-4">Cultural Identity</h4>
                <p className="text-blue-700 leading-relaxed text-xl">
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
              className="rounded-3xl w-full h-96 object-cover border border-blue-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;