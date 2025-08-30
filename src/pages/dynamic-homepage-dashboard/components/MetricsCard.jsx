import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsCard = ({ title, value, icon, trend, trendValue, color = "blue" }) => {
  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 text-blue-900",
    green: "bg-green-50 border-green-200 text-green-900",
    purple: "bg-purple-50 border-purple-200 text-purple-900",
    orange: "bg-orange-50 border-orange-200 text-orange-900"
  };

  const iconColors = {
    blue: "#3182ce",
    green: "#38a169",
    purple: "#805ad5",
    orange: "#ed8936"
  };

  return (
    <div className={`${colorClasses?.[color]} border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105`}>
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-lg bg-white shadow-sm">
          <Icon name={icon} size={24} color={iconColors?.[color]} />
        </div>
        {trend && (
          <div className={`flex items-center space-x-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            <Icon name={trend === 'up' ? 'TrendingUp' : 'TrendingDown'} size={16} />
            <span className="text-sm font-medium">{trendValue}</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-1 kinetic-text">{value}</h3>
        <p className="text-sm opacity-75">{title}</p>
      </div>
    </div>
  );
};

export default MetricsCard;