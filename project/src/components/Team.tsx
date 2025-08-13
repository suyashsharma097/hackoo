import React from 'react';
import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Team Member 1",
      role: "Machine Learning Engineer",
      description: "Specializes in computer vision and deep learning model development.",
      skills: ["Python", "TensorFlow", "OpenCV", "PyTorch"],
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Team Member 2",
      role: "Full Stack Developer",
      description: "Expert in web technologies and real-time application development.",
      skills: ["React", "Node.js", "WebRTC", "Python"],
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Team Member 3",
      role: "Data Scientist",
      description: "Focuses on data preprocessing, model training, and performance optimization.",
      skills: ["Python", "Pandas", "Scikit-learn", "Data Analysis"],
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Team Member 4",
      role: "UI/UX Designer & Developer",
      description: "Creates intuitive interfaces and ensures accessibility standards.",
      skills: ["Figma", "React", "CSS", "Accessibility"],
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate team of four developers, designers, and researchers working together to make 
            communication accessible through innovative technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center gap-4">
                  <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors duration-200">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
          <Code2 className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">Built with Passion</h3>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto leading-relaxed">
            This project represents countless hours of research, development, and testing. 
            We're committed to creating technology that makes a real difference in people's lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;