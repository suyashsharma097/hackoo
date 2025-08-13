import React from 'react';
import { Github, Linkedin, Mail, Code2, Award, Coffee } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Machine Learning Engineer",
      description: "Specializes in computer vision and deep learning model development for real-time gesture recognition.",
      skills: ["Python", "TensorFlow", "OpenCV", "PyTorch", "MediaPipe"],
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["Published 3 ML papers", "Google AI Resident", "Kaggle Expert"]
    },
    {
      name: "Sarah Johnson",
      role: "Full Stack Developer",
      description: "Expert in web technologies and real-time application development with focus on accessibility.",
      skills: ["React", "Node.js", "WebRTC", "Python", "TypeScript"],
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["AWS Certified", "Open Source Contributor", "Accessibility Advocate"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Data Scientist",
      description: "Focuses on data preprocessing, model training, and performance optimization for sign language datasets.",
      skills: ["Python", "Pandas", "Scikit-learn", "Data Analysis", "Statistics"],
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["PhD in Statistics", "Data Science Mentor", "Research Publications"]
    },
    {
      name: "Emma Thompson",
      role: "UI/UX Designer & Developer",
      description: "Creates intuitive interfaces and ensures accessibility standards for inclusive user experiences.",
      skills: ["Figma", "React", "CSS", "Accessibility", "User Research"],
      image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
      achievements: ["UX Certified", "Design Systems Expert", "Inclusive Design Leader"]
    }
  ];

  const teamStats = [
    { label: "Combined Experience", value: "15+ Years", icon: Award },
    { label: "Projects Completed", value: "50+", icon: Code2 },
    { label: "Coffee Consumed", value: "∞", icon: Coffee },
    { label: "Lines of Code", value: "100K+", icon: Github }
  ];

  return (
    <div className="p-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-900 mb-8">Meet Web Echoes</h1>
        <p className="text-2xl text-blue-700 leading-relaxed">
          A passionate team of four developers, designers, and researchers from Web Echoes working together to make 
          communication accessible through innovative technology.
        </p>
      </div>

      {/* Team Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {teamStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-3xl p-10 border border-blue-200 text-center hover:border-blue-300 transition-all duration-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-2xl mb-8">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-900 mb-3">{stat.value}</div>
              <div className="text-blue-600 font-semibold text-lg">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-3xl hover:border-blue-300 transition-all duration-300 overflow-hidden border border-blue-200">
            <div className="relative p-8 flex justify-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-48 h-48 object-cover rounded-full border-4 border-blue-100"
              />
            </div>
            
            <div className="p-10">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-3">{member.name}</h3>
                  <p className="text-blue-600 font-bold text-xl">{member.role}</p>
                </div>
                <div className="flex gap-4">
                  <button className="p-4 text-blue-400 hover:text-blue-600 transition-colors duration-200 bg-blue-50 rounded-xl">
                    <Github className="w-6 h-6" />
                  </button>
                  <button className="p-4 text-blue-400 hover:text-blue-600 transition-colors duration-200 bg-blue-50 rounded-xl">
                    <Linkedin className="w-6 h-6" />
                  </button>
                  <button className="p-4 text-blue-400 hover:text-blue-600 transition-colors duration-200 bg-blue-50 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <p className="text-blue-700 mb-8 leading-relaxed text-xl">{member.description}</p>
              
              <div className="mb-8">
                <h4 className="font-bold text-blue-800 mb-4 text-lg">Skills</h4>
                <div className="flex flex-wrap gap-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-5 py-3 bg-blue-50 text-blue-700 rounded-2xl font-semibold border border-blue-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-blue-800 mb-4 text-lg">Achievements</h4>
                <ul className="space-y-3">
                  {member.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-blue-600 flex items-center gap-4 text-lg">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Mission */}
      <div className="bg-blue-600 rounded-3xl p-16 text-center text-white max-w-7xl mx-auto">
        <Code2 className="w-24 h-24 mx-auto mb-10 opacity-90" />
        <h3 className="text-5xl font-bold mb-8">Built with Passion</h3>
        <p className="text-blue-100 text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
          This project represents countless hours of research, development, and testing. 
          We're committed to creating technology that makes a real difference in people's lives.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto">
          <p className="font-bold text-xl">Hackathon 2024 Project</p>
          <p className="text-blue-200 mt-3 text-lg">Bridging communication gaps with AI</p>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;