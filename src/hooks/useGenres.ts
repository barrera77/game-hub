import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../hooks/useData";
import apiClient from "../Services/api-client";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hrs
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
