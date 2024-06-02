import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../../interfaces/Label";
import useLabels from "../../hooks/useLabels";
import LoadingIcon from "../../shared/components/LoadingIcon";
import { FC } from "react";

interface Props {
  selectedLabel: string[];
  onChange: (label: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectedLabel, onChange }) => {
  const labelQuery = useLabels();

  if (labelQuery.isLoading) {
    //isLoading no es lo mismo que isFetching
    return <LoadingIcon />; // isLoading es true solo cuando se esta cargando por primera vez
    // isFetching es true cuando se esta refrescando los datos
  }

  return (
    <div>
      {labelQuery.data?.map((label: Label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabel.includes(label.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
