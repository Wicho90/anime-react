import { Navigate, useParams } from 'react-router-dom';
import { useEpisode } from '../hooks/useEpisode';
import { VideoPlay } from '../../components/VideoPlay';
import './EpisodeView.css';

export const EpisodeView = () => {

  const { slug = '0' } = useParams();

  const episodeQuery = useEpisode(slug);
  
  if (episodeQuery.isLoading)
    return (<h1>Cargando...</h1>)
  
  if ( !episodeQuery.data )
    return <Navigate to={"/home"} />
  

  const { name, season, number, duration, url } = episodeQuery.data;
  // <h1>Temporada: { season.slug } </h1>
  //     <h2>Capitulo{ number } { name }</h2>
  //     <p>Duración: {duration}</p>
  // 

  return (
    <>

      <div className='columns'>
        <VideoPlay url={url} />
      </div>

      <div className="episode_r">
        <div className="episode_r__firts">

        </div>
      </div>


    </>
  )
}
