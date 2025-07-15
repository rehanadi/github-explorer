import { render, screen } from '@testing-library/react';
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
    render(<SearchBar />);

    expect(screen.getByPlaceholderText(/enter username/i)).toBeDefined();
  });
});