import { useEffect } from "react";
import { useGithubUsers } from "../hooks/useGithubUsers";

const GithubUsersList = () => {
  const { data } = useGithubUsers({ user: "John", page: 1 });

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <div>
      <h1>GithubUsersList</h1>
    </div>
  );
};

export default GithubUsersList;
