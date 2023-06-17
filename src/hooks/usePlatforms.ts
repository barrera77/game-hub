import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../Services/api-client";
import platforms from "../data/platforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: {
      count: platforms.length,
      results: platforms,
    },
  });

export default usePlatforms;
