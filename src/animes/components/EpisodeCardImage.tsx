import { FC } from 'react';

interface Props {
    url: string;
    name: string;
}

export const EpisodeCardImage: FC<Props> = ({url, name}) => {
  return (
    <div className="flex flex-col flex-nowrap flex-[1_0_0px]  place-content-center items-center overflow-hidden aspect-[1.20104/1] rounded-[20px] gap[20px] will-change-transform h-[383px] w-[1px] max-h-[383px] min-w-[390px] max-[809px]:order-none max-[809px]:h-[325px]" >
        <div className="absolute inset-0 rounded-[inherit]">
            <img className="block rounded-[inherit] object-[center_center] object-cover img-rendering h-full w-full" src={url} alt={name} />
        </div>
    </div>
  )
}
