import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QueryKeys } from "common/queryKeys";
import { GithubUser } from "../types";

const getGithubUsers = async (
  context: QueryFunctionContext
): Promise<GithubUser[]> => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${context[1]}&page=${context[2]}&per_page=10`
    );

    return response.data;
  } catch (_error) {
    throw new Error("Error while fetching github users");
  }
};

interface Props {
  user?: string;
  page: number;
  enabled?: boolean;
}

export const useGithubUsers = ({ user, page, enabled = true }: Props) => {
  //   const location = useLocation();

  return useQuery({
    queryKey: [QueryKeys.GithubUsers, user, page],
    queryFn: (context) => getGithubUsers(context),
    enabled: !!user && enabled,
  });
};
