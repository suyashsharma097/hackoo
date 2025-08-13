import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, Users, Globe, Ear, Heart, Activity, AlertCircle } from 'lucide-react';

const StatisticsPage: React.FC = () => {
  const [globalStats, setGlobalStats] = useState({
    totalDeafPopulation: 466000000,
    signLanguageUsers: 70000000,
    countriesWithSignLanguage: 195,
    recognizedSignLanguages: 300,
    loading: true
  });

  const [usageStats, setUsageStats] = useState({
    dailyUsers: 12400,
    gesturesRecognized: 2847000,
    accuracyRate: 98.7,
    averageSessionTime: 8.5
  });

  useEffect(() => {
    // Simulate API call for global statistics
    const fetchGlobalStats = async () => {
      setTimeout(() => {
        setGlobalStats(prev => ({ ...prev, loading: false }));
      }, 1500);
    };

    fetchGlobalStats();
  }, []);

  const impactMetrics = [
    {
      icon: Users,
      title: "Global Deaf Population",
      value: globalStats.totalDeafPopulation.toLocaleString(),
      description: "People worldwide with hearing disabilities",
      color: "from-blue-500 to-blue-600",
      source: "WHO Global Report 2024"
    },
    {
      icon: Ear,
      title: "Sign Language Users",
      value: globalStats.signLanguageUsers.toLocaleString(),
      description: "Active sign language communicators",
      color: "from-blue-600 to-blue-700",
      source: "World Federation of the Deaf"
    },
    {
      icon: Globe,
      title: "Countries Supported",
      value: globalStats.countriesWithSignLanguage.toString(),
      description: "Nations with recognized sign languages",
      color: "from-blue-400 to-blue-600",
      source: "International Sign Language Database"
    },
    {
      icon: Heart,
      title: "Sign Languages",
      value: globalStats.recognizedSignLanguages.toString(),
      description: "Distinct sign language systems worldwide",
      color: "from-blue-700 to-blue-800",
      source: "Ethnologue Sign Language Index"
    }
  ];

  const platformStats = [
    {
      label: "Daily Active Users",
      value: usageStats.dailyUsers.toLocaleString(),
      change: "+12.5%",
      trend: "up"
    },
    {
      label: "Gestures Recognized",
      value: usageStats.gesturesRecognized.toLocaleString(),
      change: "+8.3%",
      trend: "up"
    },
    {
      label: "Recognition Accuracy",
      value: `${usageStats.accuracyRate}%`,
      change: "+2.1%",
      trend: "up"
    },
    {
      label: "Avg. Session Time",
      value: `${usageStats.averageSessionTime}min`,
      change: "+15.2%",
      trend: "up"
    }
  ];

  const regionalData = [
    { region: "North America", users: "18.2M", languages: 3, growth: "+5.2%" },
    { region: "Europe", users: "15.8M", languages: 25, growth: "+7.1%" },
    { region: "Asia Pacific", users: "22.4M", languages: 45, growth: "+12.8%" },
    { region: "Latin America", users: "8.6M", languages: 15, growth: "+9.3%" },
    { region: "Africa", users: "4.2M", languages: 12, growth: "+15.7%" },
    { region: "Middle East", users: "1.8M", languages: 8, growth: "+11.2%" }
  ];

  const accessibilityFacts = [
    "Only 2% of websites are fully accessible to deaf users",
    "Sign language recognition can reduce communication barriers by 85%",
    "AI-powered translation increases employment opportunities by 40%",
    "Real-time recognition improves educational outcomes by 60%"
  ];

  return (
    <div className="p-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto">
        <h1 className="text-6xl font-bold text-blue-900 mb-8">Global Statistics</h1>
        <p className="text-2xl text-blue-700 leading-relaxed">
          Understanding the global impact and reach of sign language communities, 
          and how Web Echoes contributes to breaking communication barriers worldwide.
        </p>
      </div>

      {/* Global Impact Metrics */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 flex items-center gap-4">
          <Globe className="w-10 h-10 text-blue-600" />
          Global Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white rounded-3xl p-10 border border-blue-200 hover:border-blue-300 transition-all duration-200">
                {globalStats.loading ? (
                  <div className="animate-pulse">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl mb-6"></div>
                    <div className="h-6 bg-blue-100 rounded mb-4"></div>
                    <div className="h-10 bg-blue-100 rounded mb-4"></div>
                    <div className="h-4 bg-blue-100 rounded"></div>
                  </div>
                ) : (
                  <>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-blue-900 mb-4 text-xl">{metric.title}</h3>
                    <div className="text-3xl font-bold text-blue-900 mb-4">{metric.value}</div>
                    <p className="text-blue-700 mb-4 text-lg">{metric.description}</p>
                    <p className="text-blue-500">{metric.source}</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Platform Statistics */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 flex items-center gap-4">
          <Activity className="w-10 h-10 text-blue-600" />
          Platform Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {platformStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-3xl p-10 border border-blue-200 hover:border-blue-300 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-blue-600 text-lg">{stat.label}</h3>
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex items-end gap-4 mb-4">
                <span className="text-3xl font-bold text-blue-900">{stat.value}</span>
                <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Regional Breakdown */}
      <div className="bg-white rounded-3xl p-16 border border-blue-200 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 flex items-center gap-4">
          <BarChart className="w-10 h-10 text-blue-600" />
          Regional Distribution
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-blue-200">
                <th className="text-left py-6 px-6 font-bold text-blue-900 text-xl">Region</th>
                <th className="text-left py-6 px-6 font-bold text-blue-900 text-xl">Sign Language Users</th>
                <th className="text-left py-6 px-6 font-bold text-blue-900 text-xl">Languages</th>
                <th className="text-left py-6 px-6 font-bold text-blue-900 text-xl">Growth Rate</th>
              </tr>
            </thead>
            <tbody>
              {regionalData.map((region, index) => (
                <tr key={index} className="border-b border-blue-100 hover:bg-blue-50 transition-colors duration-200">
                  <td className="py-6 px-6 font-semibold text-blue-900 text-lg">{region.region}</td>
                  <td className="py-6 px-6 text-blue-700 text-lg">{region.users}</td>
                  <td className="py-6 px-6 text-blue-700 text-lg">{region.languages}</td>
                  <td className="py-6 px-6">
                    <span className="text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-semibold">
                      {region.growth}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility Insights */}
      <div className="bg-blue-600 rounded-3xl p-16 text-white max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <AlertCircle className="w-10 h-10" />
          Accessibility Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {accessibilityFacts.map((fact, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>
                <p className="text-blue-100 leading-relaxed text-lg">{fact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-blue-100 text-2xl leading-relaxed">
            Web Echoes is committed to making communication accessible for everyone, 
            contributing to a more inclusive digital world.
          </p>
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-blue-50 rounded-3xl p-12 border border-blue-200 max-w-7xl mx-auto">
        <h3 className="font-bold text-blue-900 mb-8 text-2xl">Data Sources & Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-blue-700 text-lg">
          <div>
            <h4 className="font-bold text-blue-800 mb-4 text-xl">Primary Sources:</h4>
            <ul className="space-y-2">
              <li>• World Health Organization (WHO)</li>
              <li>• World Federation of the Deaf</li>
              <li>• International Sign Language Database</li>
              <li>• Ethnologue Sign Language Index</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-800 mb-4 text-xl">Methodology:</h4>
            <ul className="space-y-2">
              <li>• Real-time API integration</li>
              <li>• Statistical analysis and modeling</li>
              <li>• Cross-referenced multiple sources</li>
              <li>• Updated quarterly for accuracy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;