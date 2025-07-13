import { render, screen } from '@testing-library/react';
import RepoCard from '../RepoCard';
import { describe, expect, it } from "vitest";

describe('RepoCard', () => {
  it('renders repo name, stars, and description', () => {
    const mockRepo = {
      id: 1,
      name: 'test-repo',
      stargazers_count: 42,
      description: 'A test repository',
    };

    render(<RepoCard repo={mockRepo} />);

    expect(screen.getByText(/test-repo/i)).not.toBeNull();
    expect(screen.getByText(/⭐ 42/)).not.toBeNull();
    expect(screen.getByText(/a test repository/i)).not.toBeNull();
  });
});