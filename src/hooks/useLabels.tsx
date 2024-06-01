import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../api/githubApi";
import { Label } from "../interfaces/Label";
import sleep from "../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);
  const { data } = await githubApi.get<Label[]>("/labels");
  console.log(data);
  return data;
};

function useLabels() {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    refetchOnWindowFocus: true,
    staleTime: 1000 * 60 * 5, //nos sirve para poder mantener los datos en cache como fresco por 5 minutos
  });
  return labelsQuery;
}

export default useLabels;
