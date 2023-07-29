
import { FC } from 'react';
import './VideoPlay.css'



interface Props {
  url: string;
} 
export const VideoPlay: FC<Props> = ({ url }) => {

  return (
    <div className="wrap">
        <iframe className="video"  src={ url }  title="Kevin Kaarl - te quiero tanto (Video Oficial)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}



