import { useQuery } from '@tanstack/react-query';
import { Episode } from '../interfaces/episode';
import { animeApiV2 } from '../../api/animeApi';

const getEpisodeBySlug = async(slug: string): Promise<Episode> => {
    // const { data } = await animeApi.get<Episode>(`/episode/slug/${slug}`);
    const { data } = await animeApiV2.get<Episode>(`/episodes/slug/${slug}`);
    return data;
} 

export const useEpisode = (slug: string) => {
    const episodeQuery = useQuery(
        ['episode', slug],
        () => getEpisodeBySlug(slug),
        {
            staleTime: 1000 * 60 * 60,
        }
    );
    
    return episodeQuery;
}
