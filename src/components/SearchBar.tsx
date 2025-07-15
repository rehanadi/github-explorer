import { useStore } from '../app/store';

function SearchBar() {
  const { searchQuery, setSearchQuery } = useStore();

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter username"
        className="border border-gray-400 p-2 w-full mb-2 rounded-md focus:outline-gray-600"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;