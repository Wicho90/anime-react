import { useQuery } from "@tanstack/react-query";
import { animeApiV2 } from "../../api/animeApi"
import { EpisodeWithImage } from "../interfaces/episode_flat";

const getRecentEpisodes = async(): Promise<EpisodeWithImage[]> => {
    const {data} = await animeApiV2.get<EpisodeWithImage[]>(`/episodes/latest`)
    return data;
}
export const useRecentEpisodes = () => {
    const recentEpisodesQuery = useQuery(
        ['recent-episodes'],
        getRecentEpisodes,
        {
            staleTime: 1000 * 60 * 60,
        }
    );

    return recentEpisodesQuery;
}