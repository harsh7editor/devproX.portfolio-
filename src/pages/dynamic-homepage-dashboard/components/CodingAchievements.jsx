import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CodingAchievements = () => {
  const platforms = [
    {
      name: "LeetCode",
      username: "harsh_kori277",
      stats: {
        ranking: "353,070",
        solved: 318,
        total: 2500,
        streak: 156,
        contests: 23
      },
      badges: ["Python", "Core Java", "Open Source Contributor"],
      profileUrl: "https://leetcode.com/u/harsh_kori277/",
      color: "orange"
    },
    {
      name: "CodeChef",
      username: "harshkori389",
      stats: {
        ranking: "6 Star",
        solved: 234,
        total: 500,
        streak: 89,
        contests: 15
      },
      badges: ["Problem Solving Gold", "Java Expert", "SQL Advanced"],
      profileUrl: "https://www.codechef.com/users/harshkori389",
      color: "green"
    },
    {
      name: "Codeforces",
      username: "alexc_coder",
      stats: {
        ranking: "Expert",
        solved: 456,
        total: 1200,
        streak: 67,
        contests: 34
      },
      badges: ["Expert Coder", "Contest Regular", "Math Specialist"],
      profileUrl: "https://codeforces.com/profile/alexc_coder",
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      orange: {
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-900",
        accent: "text-orange-600",
        badge: "bg-orange-100 text-orange-800"
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        text: "text-green-900",
        accent: "text-green-600",
        badge: "bg-green-100 text-green-800"
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        text: "text-blue-900",
        accent: "text-blue-600",
        badge: "bg-blue-100 text-blue-800"
      }
    };
    return colors?.[color];
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coding Achievements</h2>
          <p className="text-xl text-gray-600">
            Competitive programming excellence across multiple platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {platforms?.map((platform) => {
            const colors = getColorClasses(platform?.color);
            const solvedPercentage = Math.round((platform?.stats?.solved / platform?.stats?.total) * 100);
            
            return (
              <div key={platform?.name} className={`${colors?.bg} ${colors?.border} border rounded-xl p-6 hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className={`text-2xl font-bold ${colors?.text}`}>{platform?.name}</h3>
                    <p className="text-gray-600">@{platform?.username}</p>
                  </div>
                  <div className={`p-3 bg-white rounded-lg shadow-sm`}>
                    <Icon name="Trophy" size={24} color={colors?.accent?.replace('text-', '#')} />
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Global Ranking</span>
                    <span className={`font-bold ${colors?.accent}`}>{platform?.stats?.ranking}</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700">Problems Solved</span>
                      <span className={`font-bold ${colors?.accent}`}>
                        {platform?.stats?.solved}/{platform?.stats?.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${colors?.accent?.replace('text-', 'bg-')}`}
                        style={{ width: `${solvedPercentage}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{solvedPercentage}% completed</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors?.accent}`}>{platform?.stats?.streak}</div>
                      <div className="text-sm text-gray-600">Day Streak</div>
                    </div>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${colors?.accent}`}>{platform?.stats?.contests}</div>
                      <div className="text-sm text-gray-600">Contests</div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Badges</h4>
                  <div className="flex flex-wrap gap-2">
                    {platform?.badges?.map((badge) => (
                      <span key={badge} className={`px-2 py-1 ${colors?.badge} text-xs rounded-full`}>
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  fullWidth 
                  iconName="ExternalLink" 
                  iconPosition="right"
                  onClick={() => window.open(platform?.profileUrl, '_blank')}
                >
                  View Profile
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Overall Statistics</h3>
            <p className="text-gray-600">Combined achievements across all platforms</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,537</div>
              <div className="text-gray-600">Total Problems Solved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">312</div>
              <div className="text-gray-600">Current Streak</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">72</div>
              <div className="text-gray-600">Contest Participations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15</div>
              <div className="text-gray-600">Platform Badges</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingAchievements;