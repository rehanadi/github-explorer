import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import { useStore } from '../app/store';
import { searchUsers } from '../services/api';
import { useEffect, useState } from 'react';
import Header from "../components/Header";
import debounce from 'lodash.debounce';

function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { searchQuery } = useStore();

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setUsers([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    try {
      const res = await searchUsers(query);
      setUsers(res.data.items);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users. Please try again.');
      setUsers([]);
    }
    setIsLoading(false);
  };

  // ✅ debounce the search function
  useEffect(() => {
    const debounced = debounce(() => {
      handleSearch(searchQuery);
    }, 500);

    debounced();

    return () => debounced.cancel();
  }, [searchQuery]);

  const renderUsers = () => {
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    return users.map((user) => <UserCard key={user.id} user={user} />);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      <div className="flex flex-col justify-center space-y-5 w-full md:max-w-2xl min-h-screen md:min-h-0 p-10 md:p-20 m-0 md:m-20 bg-white shadow-xl rounded-none md:rounded-2xl">
        <Header />
        <SearchBar />
        <div className="mt-4">{renderUsers()}</div>
      </div>
    </div>
  );
}

export default Home;
