import { FC } from "react";
import { useNavigate } from "react-router-dom"

interface Props {
    name: string;
    slug: string;
    number: number

}

export const EpisodeCardText: FC<Props> = ({slug, name, number }) => {
    const navigate = useNavigate();
    const nameShort = name.substring(0, 15);
  return (
    <div className="flex flex-col flex-[1_0_0px] flex-nowrap justify-center items-start content-start gap-[20px] h-min w-[1px] min-w-[200px] max-[809px]:order-1">
                <div className="flex flex-col flex-[0_0_auto] justify-start shrink-0 transform-none overflow-visible whitespace-pre-wrap w-full ">
                    <h2 className="text-[50px] font-bold text-left leading-[60px] tracking-[-2px] text-[#ffff] truncate">
                        { nameShort }
                    </h2>
                </div>

                <div className="flex flex-col flex-[0_0_auto] justify-start shrink-0 transform-none overflow-visible whitespace-pre-wrap w-full">
                    <h2 className="text-[24px] font-medium text-left leading-6 tracking-[-0.5px] text-slate-500">
                        Capitulo { number }
                    </h2>
                </div>

                <div className="flex flex-nowrap flex-[0_0_auto] justify-start select-none content-center items-center gap-[15px] h-min w-full">
                    
                {/* box-shadow: rgba(0, 0, 0, 0.15) 0px 0.706592px 0.706592px -0.625px, rgba(0, 0, 0, 0.145) 0px 1.80656px 1.80656px -1.25px, rgba(0, 0, 0, 0.137) 0px 3.62176px 3.62176px -1.875px, rgba(0, 0, 0, 0.125) 0px 6.8656px 6.8656px -2.5px, rgba(0, 0, 0, 0.106) 0px 13.6468px 13.6468px -3.125px, rgba(0, 0, 0, 0.05) 0px 30px 30px -3.75px; */}
                    
                    {/* buttton */}
                    <div className='flex flex-nowrap flex-[0_0_auto] place-content-center items-center bg-[#222222] shadow-lg shadow-slate-500 rounded-[8px] cursor-pointer gap-[15px] h-[40px] p-[15px] w-min' onClick={() => navigate(`/episodio/${slug}`)} >
                        <div className="flex flex-col flex-[0_0_auto] justify-start shrink-0 transform-none outline-none whitespace-pre h-auto w-auto">
                            <p className="text-[14px] font-bold text-center text-white">Ver Capitulo</p>
                        </div>
                    </div>

                    {/* buttton */}
                    <div className='flex flex-nowrap flex-[0_0_auto] place-content-center items-center bg-[#222222] rounded-[8px] gap-[15px] cursor-pointer h-[40px] p-[15px] w-min'>
                        <div className="flex flex-col flex-[0_0_auto] justify-start shrink-0 transform-none outline-none whitespace-pre h-auto w-auto">
                            <p className="text-[14px] font-bold text-center text-white">Ver Capitulo</p>
                        </div>
                    </div>

                </div>
            </div>
  )
}
