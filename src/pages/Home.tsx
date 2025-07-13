import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';
import { useStore } from '../app/store';
import { searchUsers } from '../services/api';
import { useState } from 'react';
import Header from "../components/Header";

function Home() {
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { searchQuery } = useStore();

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await searchUsers(searchQuery);
      setUsers(res.data.items);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users. Please try again.');
      setUsers([]);
    }
    setIsLoading(false);
  };

  const renderUsers = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p className="text-red-500">{error}</p>;
    }
    return users.map((user) => <UserCard key={user.id} user={user} />);
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <div className="mt-4">
        {renderUsers()}
      </div>
    </div>
  );
}

export default Home;