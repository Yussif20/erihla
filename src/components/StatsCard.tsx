import React from 'react';

interface StatsCardProps {
  title: string;
  value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h3 className="text-sm text-gray-500 dark:text-gray-400">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default StatsCard;
