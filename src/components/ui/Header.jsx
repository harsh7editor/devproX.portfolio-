import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const primaryNavItems = [
    { path: '/dynamic-homepage-dashboard', label: 'Dashboard', icon: 'BarChart3' },
    { path: '/project-universe-portfolio', label: 'Projects', icon: 'FolderOpen' },
    { path: '/technical-proficiency-observatory', label: 'Skills', icon: 'Code2' },
    { path: '/coding-achievements-arena', label: 'Achievements', icon: 'Trophy' },
  ];

  const secondaryNavItems = [
    { path: '/professional-journey-timeline', label: 'Journey', icon: 'Timeline' },
    { path: '/open-source-contribution-impact', label: 'Open Source', icon: 'GitBranch' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const Logo = () => (
    <Link to="/dynamic-homepage-dashboard" className="flex items-center space-x-3 group">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-success rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-neural transition-all duration-300">
          <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
        </div>
        <div className="absolute -inset-1 bg-gradient-holographic rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-headline text-brand-primary group-hover:text-brand-accent transition-colors duration-300">
          DevPortfolio
        </span>
        <span className="text-xs font-code text-text-secondary -mt-1">
          Pro
        </span>
      </div>
    </Link>
  );

  const NavLink = ({ item, isMobile = false }) => (
    <Link
      to={item?.path}
      onClick={isMobile ? closeMenu : undefined}
      className={`
        flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 group
        ${isActivePath(item?.path)
          ? 'bg-brand-accent text-white shadow-lift'
          : 'text-text-secondary hover:text-brand-primary hover:bg-surface'
        }
        ${isMobile ? 'w-full justify-start' : ''}
      `}
    >
      <Icon 
        name={item?.icon} 
        size={18} 
        color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
      />
      <span>{item?.label}</span>
      {isActivePath(item?.path) && (
        <div className="w-1 h-1 bg-white rounded-full ml-auto"></div>
      )}
    </Link>
  );

  const MoreDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 px-3 py-2 rounded-lg font-medium text-text-secondary hover:text-brand-primary hover:bg-surface transition-all duration-300"
        >
          <Icon name="MoreHorizontal" size={18} />
          <span>More</span>
          <Icon 
            name="ChevronDown" 
            size={14} 
            className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </button>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            ></div>
            <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lift-hover z-50 py-2">
              {secondaryNavItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-colors duration-200
                    ${isActivePath(item?.path)
                      ? 'bg-brand-accent text-white' :'text-text-secondary hover:text-brand-primary hover:bg-surface'
                    }
                  `}
                >
                  <Icon 
                    name={item?.icon} 
                    size={16} 
                    color={isActivePath(item?.path) ? 'white' : 'currentColor'} 
                  />
                  <span>{item?.label}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-card/95 backdrop-blur-md border-b border-border shadow-micro' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {primaryNavItems?.map((item) => (
              <NavLink key={item?.path} item={item} />
            ))}
            <MoreDropdown />
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              iconPosition="left"
              className="text-text-secondary hover:text-brand-primary"
            >
              Resume
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="MessageCircle"
              iconPosition="left"
              className="pulse-cta"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-brand-primary hover:bg-surface transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" 
            onClick={closeMenu}
          ></div>
          <div className="fixed top-16 left-0 right-0 bg-card border-b border-border shadow-lift-hover z-50 lg:hidden">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-2">
                {[...primaryNavItems, ...secondaryNavItems]?.map((item) => (
                  <NavLink key={item?.path} item={item} isMobile />
                ))}
              </nav>
              
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-border">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                  onClick={closeMenu}
                >
                  Download Resume
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  fullWidth
                  onClick={closeMenu}
                >
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;