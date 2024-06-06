import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import useIssues from "../../hooks/useIssues";

export const ListView = () => {
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);
  const { issuesQuery } = useIssues();
  const handleLabelChange = (labelName: string) => {
    selectedLabel?.includes(labelName)
      ? setSelectedLabel(selectedLabel.filter((label) => label !== labelName))
      : setSelectedLabel([...selectedLabel, labelName]);
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        <IssueList />
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabel={selectedLabel}
          onChange={handleLabelChange}
        />
      </div>
    </div>
  );
};
