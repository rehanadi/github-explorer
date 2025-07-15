import React from 'react';
import { FaStar } from "react-icons/fa";

interface Props {
  repo: any;
}

const RepoCard = React.forwardRef<HTMLDivElement, Props>(({ repo }, ref) => (
  <div ref={ref} className="border border-gray-300 rounded-md p-2 mb-2">
    <div className="flex justify-between items-center space-x-2">
      <h5 className="font-semibold">{repo.name}</h5>
      <div className="flex items-center space-x-1">
        <div><FaStar className="text-yellow-300" size={15} /></div>
        <div className="mt-1">{repo.stargazers_count}</div>
      </div>
    </div>
    <p className="text-sm text-gray-600 mt-2">{repo.description}</p>
  </div>
));

export default RepoCard;