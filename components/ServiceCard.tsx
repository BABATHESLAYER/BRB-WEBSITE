import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: 'yellow' | 'pink' | 'cyan' | 'purple';
  rotation?: string;
}

const colorClasses = {
  yellow: 'bg-brb-yellow',
  pink: 'bg-brb-pink',
  cyan: 'bg-brb-cyan',
  purple: 'bg-brb-purple',
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, color, rotation = '0deg' }) => {
  return (
    <div 
      className={`relative group border-4 border-brb-black p-6 shadow-hard transition-all duration-200 hover:shadow-hard-lg hover:-translate-y-1 ${colorClasses[color]}`}
      style={{ transform: `rotate(${rotation})` }}
    >
      <div className="absolute -top-6 -right-6 bg-white border-4 border-brb-black p-2 rounded-full shadow-hard-sm z-10">
        <Icon size={32} className="text-brb-black" />
      </div>
      <h3 className="font-display font-bold text-3xl mb-4 uppercase tracking-tighter text-brb-black leading-none">
        {title}
      </h3>
      <p className="font-sans font-medium text-lg leading-tight border-t-4 border-brb-black pt-4">
        {description}
      </p>
    </div>
  );
};