import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import FilterBar from './components/FilterBar';
import ProjectGrid from './components/ProjectGrid';
import ProjectModal from './components/ProjectModal';
import MobileProjectCarousel from './components/MobileProjectCarousel';

const ProjectUniversePortfolio = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: [],
    industry: [],
    complexity: []
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('featured');

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      description: "A comprehensive e-commerce solution with advanced analytics, real-time inventory management, and AI-powered recommendations that increased conversion rates by 45%.",
      fullDescription: `A next-generation e-commerce platform built to handle high-traffic scenarios while providing seamless user experiences. This project revolutionized online shopping with intelligent product recommendations, dynamic pricing strategies, and comprehensive analytics dashboard.

The platform serves over 100,000 daily active users and processes thousands of transactions per hour with 99.9% uptime. Built with scalability in mind, it can handle traffic spikes during peak shopping seasons without performance degradation.`,
      image: "https://github.com/user-attachments/assets/e20f5144-aa12-4b50-896c-d52fc663fb94",
      type: "Webpage",
      industry: "Real-time-leaderBoard",
      complexity: "Enterprise",
      techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js", "PostgreSQL", "Redis","Docker",],
      timeline: "8 months",
      teamSize: 6,
      role: "Lead Developer",
      featured: true,
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/username/ecommerce-platform",
      metrics: [
        { type: "conversion", value: "45%", label: "Conversion Increase", improvement: "32%" },
        { type: "users", value: "100K+", label: "Daily Active Users", improvement: "180%" },
        { type: "performance", value: "0.8s", label: "Page Load Time", improvement: "60%" },
        { type: "revenue", value: "$2.4M", label: "Monthly Revenue", improvement: "85%" }
      ],
      problemStatement: `The client's existing e-commerce platform was struggling with slow load times, poor mobile experience, and low conversion rates. The legacy system couldn't handle traffic spikes during sales events, leading to lost revenue and frustrated customers. Additionally, the lack of personalization features meant that customers weren't discovering relevant products, resulting in low average order values.`,
      solutionApproach: `We designed a modern, scalable architecture using microservices and implemented advanced caching strategies. The solution included AI-powered product recommendations, real-time inventory management, and a responsive design optimized for all devices. We also integrated comprehensive analytics to provide actionable insights for business growth.`,
      keyFeatures: [
        "AI-powered product recommendation engine",
        "Real-time inventory management system",
        "Advanced search with filters and autocomplete",
        "Multi-payment gateway integration",
        "Comprehensive admin dashboard with analytics",
        "Mobile-first responsive design",
        "Automated email marketing campaigns",
        "Multi-language and currency support"
      ],
      architecture: `The platform follows a microservices architecture with separate services for user management, product catalog, order processing, and analytics. We used React with TypeScript for the frontend, Node.js with Express for the backend APIs, PostgreSQL for primary data storage, and Redis for caching and session management. The entire system is containerized with Docker and deployed on AWS using ECS for orchestration.`,
      challenges: [
        {
          title: "High Traffic Scalability",
          description: "The system needed to handle 10x traffic spikes during flash sales without performance degradation.",
          solution: "Implemented auto-scaling with AWS ECS, Redis caching, and CDN optimization to distribute load effectively."
        },
        {
          title: "Real-time Inventory Sync",
          description: "Maintaining accurate inventory across multiple sales channels in real-time was complex.",
          solution: "Built an event-driven architecture using AWS SQS for reliable message queuing and real-time updates."
        },
        {
          title: "Payment Processing Security",
          description: "Ensuring PCI compliance while supporting multiple payment methods globally.",
          solution: "Integrated with Stripe and PayPal using tokenization and implemented comprehensive security auditing."
        }
      ],
      codeSnippets: [
        {
          language: "JavaScript",
          description: "Product recommendation algorithm",
          code: `const getRecommendations = async (userId, productId) => {
  const userBehavior = await getUserBehavior(userId);
  const similarProducts = await findSimilarProducts(productId);
  
  return recommendationEngine.calculate({
    userPreferences: userBehavior,
    productSimilarity: similarProducts,
    trendingItems: await getTrendingProducts()
  });
};`
        }
      ],
      beforeAfter: {
        before: [
          "Page load times averaging 4.2 seconds",
          "Conversion rate of 1.8%",
          "Mobile bounce rate of 68%",
          "Manual inventory management",
          "Limited payment options"
        ],
        after: [
          "Page load times under 1 second",
          "Conversion rate increased to 2.6%",
          "Mobile bounce rate reduced to 32%",
          "Real-time automated inventory sync",
          "15+ payment methods supported"
        ]
      },
      testimonials: [
        {
          content: "The new platform exceeded our expectations. Sales increased by 85% in the first quarter after launch.",
          author: "Sarah Johnson",
          role: "CEO, RetailCorp"
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "HIPAA-compliant patient management system with telemedicine capabilities, appointment scheduling, and electronic health records integration.",
      fullDescription: `A comprehensive healthcare management platform designed to streamline patient care and administrative processes. The system integrates electronic health records, appointment scheduling, telemedicine capabilities, and billing management in a secure, HIPAA-compliant environment.

Built to serve healthcare providers of all sizes, from small clinics to large hospital networks. The platform has improved patient satisfaction scores by 40% and reduced administrative overhead by 35%.`,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      type: "Web App",
      industry: "Healthcare",
      complexity: "Enterprise",
      techStack: ["React", "Node.js", "MongoDB", "Socket.io", "AWS", "Docker", "TypeScript"],
      timeline: "12 months",
      teamSize: 8,
      role: "Full Stack Developer",
      featured: true,
      demoUrl: "https://demo-healthcare.example.com",
      githubUrl: "https://github.com/username/healthcare-system",
      metrics: [
        { type: "users", value: "50K+", label: "Active Patients", improvement: "120%" },
        { type: "performance", value: "99.9%", label: "System Uptime", improvement: "15%" },
        { type: "conversion", value: "40%", label: "Patient Satisfaction", improvement: "25%" }
      ],
      problemStatement: `Healthcare providers were struggling with fragmented systems, paper-based records, and inefficient appointment scheduling. The lack of integrated telemedicine capabilities became critical during the pandemic, and administrative staff were overwhelmed with manual processes.`,
      solutionApproach: `We developed an integrated platform that centralizes all healthcare operations while maintaining strict security and compliance standards. The solution includes real-time communication tools, automated workflows, and comprehensive reporting capabilities.`,
      keyFeatures: [
        "Electronic Health Records (EHR) management",
        "Telemedicine video consultations",
        "Automated appointment scheduling",
        "Prescription management system",
        "Insurance claim processing",
        "Patient portal with mobile app",
        "Real-time notifications and alerts",
        "Comprehensive reporting and analytics"
      ],
      architecture: `The system uses a secure, cloud-based architecture with end-to-end encryption. Built with React and TypeScript for the frontend, Node.js for backend services, MongoDB for flexible data storage, and Socket.io for real-time communication. All components are HIPAA-compliant and deployed on AWS with comprehensive backup and disaster recovery systems.`,
      challenges: [
        {
          title: "HIPAA Compliance",
          description: "Ensuring all data handling, storage, and transmission meets strict healthcare regulations.",
          solution: "Implemented end-to-end encryption, audit logging, and regular security assessments with third-party validation."
        },
        {
          title: "Real-time Communication",
          description: "Providing reliable video consultations and instant messaging for healthcare providers.",
          solution: "Used WebRTC for video calls and Socket.io for real-time messaging with fallback mechanisms for poor connections."
        }
      ],
      beforeAfter: {
        before: [
          "Paper-based patient records",
          "Manual appointment scheduling",
          "No telemedicine capabilities",
          "Fragmented communication systems",
          "High administrative overhead"
        ],
        after: [
          "Digital EHR with instant access",
          "Automated scheduling with reminders",
          "Integrated video consultations",
          "Unified communication platform",
          "35% reduction in admin costs"
        ]
      },
      gallery: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization platform with advanced charting, portfolio tracking, and automated reporting for investment firms.",
      fullDescription: `A sophisticated financial analytics platform that provides real-time market data visualization, portfolio performance tracking, and automated reporting capabilities. Designed for investment firms and financial advisors who need instant access to critical financial information.

The platform processes millions of data points daily and provides actionable insights through advanced analytics and machine learning algorithms. It has helped clients make more informed investment decisions and improved portfolio performance by an average of 23%.`,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      type: "Web App",
      industry: "Finance",
      complexity: "Complex",
      techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL", "Redis", "WebSocket"],
      timeline: "6 months",
      teamSize: 4,
      role: "Frontend Lead",
      featured: false,
      demoUrl: "https://demo-finance.example.com",
      githubUrl: "https://github.com/username/finance-dashboard",
      metrics: [
        { type: "performance", value: "23%", label: "Portfolio Performance", improvement: "18%" },
        { type: "users", value: "5K+", label: "Active Traders", improvement: "90%" },
        { type: "conversion", value: "15%", label: "Decision Accuracy", improvement: "12%" }
      ],
      problemStatement: `Investment firms were relying on multiple disconnected tools for market analysis, leading to delayed decision-making and missed opportunities. The lack of real-time data visualization made it difficult to spot trends and react quickly to market changes.`,
      solutionApproach: `We created a unified dashboard that aggregates data from multiple financial sources and presents it through interactive visualizations. The platform includes predictive analytics and automated alerts to help users make timely investment decisions.`,
      keyFeatures: [
        "Real-time market data streaming",
        "Interactive charts and graphs",
        "Portfolio performance tracking",
        "Risk assessment tools",
        "Automated report generation",
        "Custom alert system",
        "Multi-asset class support",
        "Mobile-responsive design"
      ],
      architecture: `The frontend is built with React and D3.js for complex data visualizations, while the backend uses Python with FastAPI for high-performance data processing. PostgreSQL stores historical data, Redis handles real-time caching, and WebSocket connections provide live market updates.`,
      challenges: [
        {
          title: "Real-time Data Processing",
          description: "Processing and visualizing millions of market data points in real-time without performance issues.",
          solution: "Implemented efficient data streaming with WebSockets and optimized rendering using virtual scrolling and data aggregation."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Learning Management System",
      description: "Comprehensive online education platform with video streaming, interactive assignments, progress tracking, and certification management.",
      fullDescription: `A modern learning management system designed to facilitate online education with engaging content delivery, interactive learning tools, and comprehensive progress tracking. The platform serves educational institutions and corporate training programs.

With support for multiple content types, real-time collaboration tools, and advanced analytics, the platform has improved student engagement by 60% and course completion rates by 45%.`,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      type: "Web App",
      industry: "Education",
      complexity: "Complex",
      techStack: ["React", "Node.js", "MongoDB", "AWS S3", "WebRTC", "Socket.io", "TypeScript"],
      timeline: "10 months",
      teamSize: 5,
      role: "Technical Lead",
      featured: false,
      demoUrl: "https://demo-lms.example.com",
      githubUrl: "https://github.com/username/lms-platform",
      metrics: [
        { type: "users", value: "25K+", label: "Active Students", improvement: "150%" },
        { type: "conversion", value: "60%", label: "Engagement Rate", improvement: "40%" },
        { type: "performance", value: "45%", label: "Completion Rate", improvement: "35%" }
      ],
      problemStatement: `Educational institutions needed a comprehensive platform to deliver online courses effectively. Existing solutions lacked engagement features and provided limited analytics on student progress and performance.`,
      solutionApproach: `We built an interactive learning platform with multimedia content support, real-time collaboration tools, and comprehensive analytics. The system includes gamification elements to increase student engagement and motivation.`,
      keyFeatures: [
        "Video streaming with adaptive quality",
        "Interactive assignments and quizzes",
        "Real-time discussion forums",
        "Progress tracking and analytics",
        "Certificate generation",
        "Mobile learning app",
        "Offline content access",
        "Integration with external tools"
      ],
      architecture: `Built with React and TypeScript for the frontend, Node.js for backend services, MongoDB for flexible content storage, and AWS S3 for video and file hosting. WebRTC enables real-time video sessions, while Socket.io powers live chat and collaboration features.`,
      challenges: [
        {
          title: "Video Streaming Optimization",
          description: "Delivering high-quality video content to users with varying internet speeds and devices.",
          solution: "Implemented adaptive bitrate streaming and CDN distribution to ensure smooth playback across all devices."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Restaurant Management API",
      description: "Scalable REST API for restaurant operations including order management, inventory tracking, staff scheduling, and customer loyalty programs.",
      fullDescription: `A comprehensive API solution designed to power restaurant management systems with features for order processing, inventory management, staff scheduling, and customer relationship management. Built to handle high-volume operations for restaurant chains.

The API serves over 500 restaurants and processes thousands of orders daily with 99.95% uptime. It has reduced operational costs by 30% and improved order accuracy by 25%.`,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      type: "API",
      industry: "Food & Beverage",
      complexity: "Medium",
      techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT", "Swagger", "Docker"],
      timeline: "4 months",
      teamSize: 3,
      role: "Backend Developer",
      featured: false,
      githubUrl: "https://github.com/username/restaurant-api",
      metrics: [
        { type: "performance", value: "99.95%", label: "API Uptime", improvement: "5%" },
        { type: "users", value: "500+", label: "Restaurant Clients", improvement: "200%" },
        { type: "conversion", value: "25%", label: "Order Accuracy", improvement: "20%" }
      ],
      problemStatement: `Restaurant chains needed a unified API to manage operations across multiple locations. Existing systems were fragmented, leading to inconsistent data and inefficient operations.`,
      solutionApproach: `We designed a RESTful API with comprehensive endpoints for all restaurant operations. The API includes real-time synchronization, robust authentication, and detailed documentation for easy integration.`,
      keyFeatures: [
        "Order management and processing",
        "Real-time inventory tracking",
        "Staff scheduling and payroll",
        "Customer loyalty programs",
        "Menu management system",
        "Analytics and reporting",
        "Multi-location support",
        "Third-party integrations"
      ],
      architecture: `Built with Node.js and Express for high-performance API endpoints, PostgreSQL for reliable data storage, Redis for caching and session management, and JWT for secure authentication. The API is fully documented with Swagger and containerized with Docker for easy deployment.`,
      challenges: [
        {
          title: "High Concurrency",
          description: "Handling thousands of simultaneous orders during peak hours without performance degradation.",
          solution: "Implemented connection pooling, database optimization, and Redis caching to handle high concurrent loads."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Social Media Analytics Tool",
      description: "Comprehensive social media monitoring and analytics platform with sentiment analysis, competitor tracking, and automated reporting.",
      fullDescription: `A powerful social media analytics platform that helps businesses monitor their online presence, track competitor activities, and analyze customer sentiment across multiple social platforms. The tool provides actionable insights to improve social media strategy and engagement.

Used by over 1,000 businesses to track social media performance and has helped clients increase engagement rates by an average of 55% through data-driven insights.`,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
      type: "Web App",
      industry: "Marketing",
      complexity: "Complex",
      techStack: ["Vue.js", "Python", "Django", "PostgreSQL", "Celery", "Redis", "Chart.js"],
      timeline: "7 months",
      teamSize: 4,
      role: "Full Stack Developer",
      featured: false,
      demoUrl: "https://demo-social-analytics.example.com",
      githubUrl: "https://github.com/username/social-analytics",
      metrics: [
        { type: "users", value: "1K+", label: "Business Clients", improvement: "300%" },
        { type: "conversion", value: "55%", label: "Engagement Increase", improvement: "45%" },
        { type: "performance", value: "2.1s", label: "Dashboard Load Time", improvement: "40%" }
      ],
      problemStatement: `Businesses struggled to monitor their social media presence across multiple platforms and lacked insights into competitor activities and customer sentiment. Manual tracking was time-consuming and prone to errors.`,
      solutionApproach: `We created an automated platform that aggregates data from multiple social media APIs, performs sentiment analysis using machine learning, and presents insights through interactive dashboards and automated reports.`,
      keyFeatures: [
        "Multi-platform social media monitoring",
        "Real-time sentiment analysis",
        "Competitor tracking and benchmarking",
        "Automated report generation",
        "Influencer identification",
        "Hashtag performance tracking",
        "Crisis alert system",
        "Custom dashboard creation"
      ],
      architecture: `Frontend built with Vue.js and Chart.js for interactive data visualization, backend powered by Python and Django for robust data processing, PostgreSQL for data storage, Celery for background task processing, and Redis for caching and task queuing.`,
      challenges: [
        {
          title: "API Rate Limiting",
          description: "Managing rate limits across multiple social media APIs while maintaining real-time data updates.",
          solution: "Implemented intelligent queuing system with Celery and Redis to optimize API calls and respect rate limits."
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop"
      ]
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.techStack?.some(tech => 
          tech?.toLowerCase()?.includes(searchTerm?.toLowerCase())
        ) ||
        project?.industry?.toLowerCase()?.includes(searchTerm?.toLowerCase())
      );
    }

    // Apply category filters
    Object.keys(selectedFilters)?.forEach(filterKey => {
      if (selectedFilters?.[filterKey]?.length > 0) {
        filtered = filtered?.filter(project =>
          selectedFilters?.[filterKey]?.includes(project?.[filterKey])
        );
      }
    });

    // Apply sorting
    switch (sortBy) {
      case 'featured':
        filtered = [...filtered]?.sort((a, b) => {
          if (a?.featured && !b?.featured) return -1;
          if (!a?.featured && b?.featured) return 1;
          return 0;
        });
        break;
      case 'newest':
        filtered = [...filtered]?.sort((a, b) => b?.id - a?.id);
        break;
      case 'complexity':
        const complexityOrder = { 'Simple': 1, 'Medium': 2, 'Complex': 3, 'Enterprise': 4 };
        filtered = [...filtered]?.sort((a, b) => 
          complexityOrder?.[b?.complexity] - complexityOrder?.[a?.complexity]
        );
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, selectedFilters, sortBy]);

  const handleFilterChange = (category, values) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedFilters({
      type: [],
      industry: [],
      complexity: []
    });
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleViewDemo = (url) => {
    window.open(url, '_blank');
  };

  const handleViewCode = (url) => {
    window.open(url, '_blank');
  };

  const projectCounts = {
    total: projects?.length,
    filtered: filteredProjects?.length
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Project Universe Portfolio - DevPortfolio Pro</title>
        <meta name="description" content="Explore my comprehensive project portfolio featuring web applications, APIs, and innovative solutions across various industries." />
      </Helmet>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <Icon name="Rocket" size={24} className="text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Project Universe</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore my comprehensive portfolio of innovative solutions across various industries. 
              Each project represents a unique challenge solved with cutting-edge technology and creative problem-solving.
            </p>
          </motion.div>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Bar */}
        <FilterBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          projectCounts={projectCounts}
        />

        {/* Sort Controls */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e?.target?.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest First</option>
              <option value="complexity">Complexity</option>
            </select>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/dynamic-homepage-dashboard', '_self')}
              iconName="Home"
              iconPosition="left"
            >
              Dashboard
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/open-source-contribution-impact', '_self')}
              iconName="GitBranch"
              iconPosition="left"
            >
              Open Source
            </Button>
          </div>
        </div>

        {/* Desktop Project Grid */}
        <div className="hidden lg:block">
          <ProjectGrid
            projects={filteredProjects}
            onViewDetails={handleViewDetails}
            onViewDemo={handleViewDemo}
            onViewCode={handleViewCode}
            loading={loading}
          />
        </div>

        {/* Mobile Project Carousel */}
        <MobileProjectCarousel
          projects={filteredProjects}
          onViewDetails={handleViewDetails}
          onViewDemo={handleViewDemo}
          onViewCode={handleViewCode}
        />

        {/* Stats Section */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Portfolio Impact</h2>
              <p className="text-gray-600">Measurable results across all projects</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {projects?.length}
                </div>
                <div className="text-sm text-gray-600">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  180K+
                </div>
                <div className="text-sm text-gray-600">Users Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  $4.2M+
                </div>
                <div className="text-sm text-gray-600">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Average Uptime</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </div>
  );
};

export default ProjectUniversePortfolio;