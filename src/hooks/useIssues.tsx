import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue } from "../interfaces/Issue";

const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get("/issues");
  console.log(data);
  return data;
};
function useIssues() {
  const issuesQuery = useQuery({ queryKey: ["issues"], queryFn: getIssues });
  return { issuesQuery };
}

export default useIssues;
