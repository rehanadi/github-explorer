import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { describe, expect, it, vi } from 'vitest';

vi.mock('../../app/store', () => {
  const actual = vi.importActual<typeof import('../../app/store')>('../../app/store');
  return {
    ...actual,
    useStore: vi.fn(() => ({ setSearchQuery: vi.fn() }))
  };
});

describe('SearchBar', () => {
  it('renders input and button', () => {
    render(<SearchBar onSearch={() => {}} />);

    expect(screen.getByPlaceholderText(/enter username/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /search/i })).toBeDefined();
  });

  it('calls onSearch when clicking button', () => {
    const onSearch = vi.fn();
    render(<SearchBar onSearch={onSearch} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onSearch).toHaveBeenCalled();
  });
});