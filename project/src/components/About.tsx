import React from 'react';
import { BookOpen, Globe, Heart, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Educational Impact",
      description: "Promoting sign language learning and awareness in communities worldwide."
    },
    {
      icon: Globe,
      title: "Universal Access",
      description: "Breaking down communication barriers for the deaf and hard-of-hearing community."
    },
    {
      icon: Heart,
      title: "Inclusive Design",
      description: "Built with accessibility and user experience at the forefront of development."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leveraging cutting-edge AI and computer vision for real-time processing."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sign Language</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sign language is a complete, natural language that has the same linguistic properties as spoken languages, 
            with grammar that differs from the spoken language used in the same region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Understanding Sign Language</h3>
              <div className="space-y-6">
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
    </section>
  );
};

export default About;