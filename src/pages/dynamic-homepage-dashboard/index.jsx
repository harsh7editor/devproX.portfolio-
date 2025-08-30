import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

// Import all components
import MetricsCard from './components/MetricsCard';
import HeroSection from './components/HeroSection';
import ActivityFeed from './components/ActivityFeed';
import FeaturedProjects from './components/FeaturedProjects';
import CertificationCarousel from './components/CertificationCarousel';
import CodingAchievements from './components/CodingAchievements';
import SkillsRadar from './components/SkillsRadar';
import ContactSection from './components/ContactSection';

const DynamicHomepageDashboard = () => {
  const metricsData = [
    {
      title: "Active Projects",
      value: "12",
      icon: "FolderOpen",
      trend: "up",
      trendValue: "+3",
      color: "blue"
    },
    {
      title: "Coding Streak",
      value: "156",
      icon: "Zap",
      trend: "up",
      trendValue: "days",
      color: "green"
    },
    {
      title: "GitHub Contributions",
      value: "2,847",
      icon: "GitBranch",
      trend: "up",
      trendValue: "+127",
      color: "purple"
    },
    {
      title: "Certifications",
      value: "8",
      icon: "Award",
      trend: "up",
      trendValue: "+2",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <Link to="/dynamic-homepage-dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-gray-900">DevPortfolio Pro</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  to="/dynamic-homepage-dashboard" 
                  className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/project-universe-portfolio" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Projects
                </Link>
                <Link 
                  to="/open-source-contribution-impact" 
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Open Source
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                Resume
              </Button>
              <Button variant="default" size="sm" iconName="MessageCircle" iconPosition="left">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <HeroSection />
      {/* Metrics Dashboard */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Live Performance Metrics</h2>
            <p className="text-xl text-gray-600">
              Real-time insights into development activity and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metricsData?.map((metric, index) => (
              <MetricsCard key={index} {...metric} />
            ))}
          </div>

          {/* Activity Feed Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
            
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Languages Used</span>
                    <span className="font-bold text-blue-600">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Repositories</span>
                    <span className="font-bold text-green-600">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Stars Earned</span>
                    <span className="font-bold text-purple-600">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Followers</span>
                    <span className="font-bold text-orange-600">567</span>
                  </div>
                </div>
              </div>

              {/* Current Status */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Current Focus</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">Building AI-powered analytics platform</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700">Learning Rust for system programming</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-700">Contributing to open-source projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Projects */}
      <FeaturedProjects />
      {/* Certification Carousel */}
      <CertificationCarousel />
      {/* Coding Achievements */}
      <CodingAchievements />
      {/* Skills Radar */}
      <SkillsRadar />
      {/* Contact Section */}
      <ContactSection />
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Code" size={20} color="white" />
                </div>
                <span className="text-xl font-bold">DevPortfolio Pro</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Full-stack developer passionate about creating scalable solutions 
                and contributing to the open-source community.
              </p>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: 'Github' },
                  { name: 'LinkedIn', icon: 'Linkedin' },
                  { name: 'Twitter', icon: 'Twitter' },
                  { name: 'Email', icon: 'Mail' }
                ]?.map((social) => (
                  <a
                    key={social?.name}
                    href="#"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Icon name={social?.icon} size={20} color="#9ca3af" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/dynamic-homepage-dashboard" className="block text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
                <Link to="/project-universe-portfolio" className="block text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link to="/open-source-contribution-impact" className="block text-gray-400 hover:text-white transition-colors">
                  Open Source
                </Link>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>harshkori389@gmail.com</p>
                <p>+91 7987134836</p>
                <p>Jabalpur, Madhya Pradesh</p>
                <p>Available for opportunities</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date()?.getFullYear()} HARSH KORI. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DynamicHomepageDashboard;