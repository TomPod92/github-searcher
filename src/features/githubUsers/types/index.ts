export type GithubUser = {
  id: number;
  login: string;
  avatar_url: string;
};

export type GithubResponse = {
  incomplete_results: boolean;
  items: GithubUser[];
  total_count: number;
};
