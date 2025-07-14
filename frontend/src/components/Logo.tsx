import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Circle */}
          <circle cx="24" cy="24" r="22" fill="url(#gradient1)" />
          
          {/* Heart Symbol */}
          <path
            d="M24 36C24 36 18 30 18 24C18 20.6863 20.6863 18 24 18C27.3137 18 30 20.6863 30 24C30 30 24 36 24 36Z"
            fill="white"
            fillOpacity="0.9"
          />
          
          {/* Cross Symbol */}
          <path
            d="M22 20H26V28H22V20ZM20 22V26H28V22H20Z"
            fill="white"
            fillOpacity="0.9"
          />
          
          {/* Connection Lines */}
          <path
            d="M8 16L16 16M32 16L40 16M8 32L16 32M32 32L40 32"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
          
          {/* Dots representing connection */}
          <circle cx="16" cy="16" r="2" fill="white" fillOpacity="0.8" />
          <circle cx="32" cy="16" r="2" fill="white" fillOpacity="0.8" />
          <circle cx="16" cy="32" r="2" fill="white" fillOpacity="0.8" />
          <circle cx="32" cy="32" r="2" fill="white" fillOpacity="0.8" />
          
          {/* Gradients */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          TeleMed
        </span>
        <span className="text-xs text-gray-500 -mt-1">Healthcare</span>
      </div>
    </div>
  );
};

export default Logo; 