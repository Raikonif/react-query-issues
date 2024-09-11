import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Issue } from "../interfaces/Issue";
import sleep from "../helpers/sleep";

const getIssueComments = async (issueNumber: number | undefined): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
  console.log(data);
  return data;
};

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`/issues/${issueNumber}`);
  console.log(data);
  return data;
};

function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issues", issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60 * 5,
  });

  // const commentsQuery = useQuery({
  //   queryKey: ["issues", issueNumber, "comments"],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60 * 5,
  // });

  const commentsQuery = useQuery({
    queryKey: ["issues", issueQuery.data?.number, "comments"],
    queryFn: () => getIssueComments(issueQuery.data?.number),
    staleTime: 1000 * 60 * 5,
    enabled: issueQuery.data !== undefined,
  });

  return { commentsQuery, issueQuery };
}

export default useIssue;
