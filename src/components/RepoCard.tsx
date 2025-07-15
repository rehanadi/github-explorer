import React from 'react';

interface Props {
  repo: any;
}

const RepoCard = React.forwardRef<HTMLDivElement, Props>(({ repo }, ref) => (
  <div ref={ref} className="border border-gray-300 rounded-md p-2 mb-2">
    <div className="flex justify-between">
      <strong>{repo.name}</strong>
      <span>⭐ {repo.stargazers_count}</span>
    </div>
    <p className="text-sm text-gray-600 mt-2">{repo.description}</p>
  </div>
));

export default RepoCard;