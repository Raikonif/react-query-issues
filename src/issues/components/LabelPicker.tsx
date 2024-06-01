import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubApi";
import { Label } from "../../interfaces/Label";
import useLabels from "../../hooks/useLabels";

export const LabelPicker = () => {
  const labelQuery = useLabels();

  if (labelQuery.isLoading) {
    //isLoading no es lo mismo que isFetching
    return <div>Loading...</div>; // isLoading es true solo cuando se esta cargando por primera vez
    // isFetching es true cuando se esta refrescando los datos
  }

  return (
    <div>
      {labelQuery.data?.map((label: Label) => (
        <span
          key={label.id}
          className="badge rounded-pill m-1 label-picker"
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
