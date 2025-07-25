import { useState } from 'react';
import { getUserRepos } from '../services/api';
import RepoCard from './RepoCard';
import { useInfiniteScroll } from '../utils/observer';
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

interface Props {
  user: any;
}

function UserCard({ user }: Props) {
  const [repos, setRepos] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState(false);

  const loadMore = async () => {
    const res = await getUserRepos(user.login, page);
    setRepos((prev) => [...prev, ...res.data]);
    setPage((prev) => prev + 1);
  };

  const lastRepoRef = useInfiniteScroll(() => {
    if (expanded) loadMore();
  });

  const handleToggle = async () => {
    if (!expanded) {
      setRepos([]);
      setPage(1);
      await loadMore();
    }
    setExpanded((prev) => !prev);
  };

  return (
    <div className="border border-gray-300 rounded-md p-3 mb-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={handleToggle}>
        <span>{user.login}</span>
        <span>{expanded ? <FiChevronUp /> : <FiChevronDown />}</span>
      </div>
      {expanded && (
        <div className="mt-4">
          {repos.map((repo, idx) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              ref={idx === repos.length - 1 ? lastRepoRef : null}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserCard;