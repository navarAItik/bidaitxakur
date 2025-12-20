import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <article className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm animate-pulse">
      <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500 mb-2">
        <div className="h-3 bg-gray-200 rounded w-16"></div>
        <div className="h-3 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
      <div className="h-16 bg-gray-200 rounded"></div>
    </article>
  );
};

export default SkeletonCard;