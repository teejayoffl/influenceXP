"use client";

import React from 'react';
import { FloatingElement } from '../animations/floating-element';

interface DashboardCardProps {
  icon: React.ReactNode;
  iconBgClass?: string;
  title: string;
  value: string;
  label: string;
  footer?: React.ReactNode;
  duration?: number;
}

export function DashboardCard({
  icon,
  iconBgClass = 'bg-gradient-to-r from-indigo-500 to-blue-600',
  title,
  value,
  label,
  footer,
  duration = 3,
}: DashboardCardProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800/30 flex flex-col items-center glow-effect cursor-hover-area">
      <FloatingElement amplitude={3} duration={duration}>
        <div className={`w-12 h-12 rounded-full ${iconBgClass} flex items-center justify-center mb-3`}>
          {icon}
        </div>
      </FloatingElement>
      <span className="text-sm font-semibold">{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
      
      {footer && (
        <div className="mt-2">
          {footer}
        </div>
      )}
    </div>
  );
} 