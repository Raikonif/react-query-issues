import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { Issue } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { State } from "../../interfaces/Issue";

interface Props {
  issue: Issue;
}

export const IssueItem = ({ issue }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="card mb-2 issue">
      <div className="card-body d-flex align-items-center">
        {!(issue.state === State.Close) ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <a onClick={() => navigate(`/issues/issue/${issue.number}`)}>{issue.title}</a>
          <span className="issue-subinfo">
            {`#${issue.number} ${issue.state} ${issue.created_at} `}
            by <span className="fw-bold">{issue.user.login}</span>
          </span>
        </div>

        <div className="d-flex align-items-center">
          <img src={issue.user.avatar_url} alt="User Avatar" className="avatar" />
          <span className="px-2">{issue.comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
