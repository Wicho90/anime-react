import { FC } from 'react';
import { EpisodeWithImage } from "../interfaces/episode_flat"

import './EpisodeItem.css';
import { EpisodeCardText } from './EpisodeCardText';
import { EpisodeCardImage } from './EpisodeCardImage';

interface Props {
    episode: EpisodeWithImage
}
export const EpisodeItem: FC<Props> = ({episode}) => {

    return (
        <li className="flex flex-row flex-wrap flex-[0_0_auto] place-content-center items-center overflow-visible gap-[80px] h-min w-full">
            <EpisodeCardImage url={episode.season.image_url} name={episode.name} />
            <EpisodeCardText slug={episode.slug} name={ episode.name}  number={episode.id}/>
        </li>
    )
}
