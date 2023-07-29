import { EpisodesList } from "../components/EpisodesList";
import { useRecentEpisodes } from "../hooks/useRecentEpisodes";

export const HomeView = () => {


  const recentEpisodesQuery = useRecentEpisodes();

  // if ( !recentEpisodesQuery.data )
  //   return <h3>Not found</h3>

  const episodes = recentEpisodesQuery.data;
  const episode = episodes !== undefined? episodes[0] : undefined;


  
  

  return (

    <>
{/* 
      <div className="h-[376px] w-full ">
        <h1>Hola</h1>
      </div>
         */}

      {/* container */}
      <div className="flex flex-row flex-nowrap flew-[0_0_auto] place-content-center items-center py-20 px-6 overflow-hidden gap-[10px] h-min w-full">
        
        <EpisodesList episodes={recentEpisodesQuery.data || []} />
        
      </div>
    </>

  )
}
