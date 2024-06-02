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
    // initialData: [],
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
      },
      {
        id: 69105383,
        node_id: "MDU6TGFiZWw2OTEwNTM4Mw==",
        url: "https://api.github.com/repos/facebook/react/labels/Browser:%20IE",
        name: "Browser: IE",
        color: "c7def8",
        default: false,
      },
    ],
  });
  return labelsQuery;
}

export default useLabels;
