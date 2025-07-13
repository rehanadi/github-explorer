import { useStore } from '../app/store';
import debounce from 'lodash.debounce';

interface Props {
  onSearch: () => void;
}

function SearchBar({ onSearch }: Props) {
  const { setSearchQuery } = useStore();

  const debouncedSearch = debounce((val: string) => {
    setSearchQuery(val);
    onSearch();
  }, 500);

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Enter username"
        className="border p-2 w-full mb-2 rounded-md"
        onChange={(e) => debouncedSearch(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 w-full rounded-md transition duration-200 hover:bg-blue-600" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;