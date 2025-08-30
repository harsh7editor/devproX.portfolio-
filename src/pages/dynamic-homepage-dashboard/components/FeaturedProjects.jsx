import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Analytics Dashboard",
      description: "Real-time analytics platform processing 1M+ daily transactions with advanced data visualization and predictive insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      techStack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
      metrics: {
        performance: "99.9% uptime",
        users: "50K+ active users",
        impact: "35% revenue increase"
      },
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/alexchen/ecommerce-analytics"
    },
    {
      id: 2,
      title: "AI-Powered Content Generator",
      description: "Machine learning platform that generates high-quality content using GPT-4 integration with custom fine-tuning.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      techStack: ["Python", "FastAPI", "OpenAI", "Docker", "GCP"],
      metrics: {
        performance: "2.3s avg response",
        users: "10K+ content pieces",
        impact: "80% time savings"
      },
      liveUrl: "https://ai-content-demo.com",
      githubUrl: "https://github.com/alexchen/ai-content-generator"
    },
    {
      id: 3,
      title: "Microservices Architecture",
      description: "Scalable microservices ecosystem handling high-traffic loads with automated deployment and monitoring.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      techStack: ["Go", "Kubernetes", "MongoDB", "RabbitMQ", "Prometheus"],
      metrics: {
        performance: "10K+ req/sec",
        users: "99.99% availability",
        impact: "60% cost reduction"
      },
      liveUrl: "https://microservices-demo.com",
      githubUrl: "https://github.com/alexchen/microservices-platform"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that demonstrate technical excellence and real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects?.map((project) => (
            <div key={project?.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
              <div className="relative overflow-hidden">
                <Image 
                  src={project?.image} 
                  alt={project?.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={project?.liveUrl} className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <Icon name="ExternalLink" size={16} color="#3182ce" />
                  </a>
                  <a href={project?.githubUrl} className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors">
                    <Icon name="Github" size={16} color="#1a202c" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project?.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project?.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project?.techStack?.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 mb-6">
                  {Object.entries(project?.metrics)?.map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-sm">
                      <span className="text-gray-500 capitalize">{key}:</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="default" size="sm" iconName="Eye" iconPosition="left" className="flex-1">
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" iconName="Code" iconPosition="left" className="flex-1">
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" iconName="ArrowRight" iconPosition="right">
            View All Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;