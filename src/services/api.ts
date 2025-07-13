import axios from 'axios';
import { API_URL, REPO_PER_PAGE } from "../constants/github";

export const searchUsers = (query: string) => {
  return axios.get(`${API_URL}/search/users?q=${query}&per_page=${REPO_PER_PAGE}`);
};

export const getUserRepos = (username: string, page: number = 1) => {
  return axios.get(`${API_URL}/users/${username}/repos?per_page=${REPO_PER_PAGE}&page=${page}`);
};