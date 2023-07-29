import { FC, useState } from 'react'
import { EpisodeWithImage } from '../interfaces/episode_flat'
import { EpisodeItem } from './EpisodeItem'
import { EpisodeItemReverse } from './EpisodeItemReverse'

interface Props {
    episodes: EpisodeWithImage[]
}

export const EpisodesList: FC<Props> = ({episodes}) => {

  const [badera, setBadera] = useState(true);

  return (
    <ul className="flex flex-col flex-nowrap flex-[1_0_0px] place-content-center items-center overflow-visible gap-[100px] h-min w-[1px] max-w-[1000px] bg-">

      {
        episodes.map( (e, i) => {

            return i %2 === 0? <EpisodeItem key={ e.id } episode={e}/> : <EpisodeItemReverse key={ e.id } episode={e}/>
          }
        )
      }

    </ul>

  )
}
