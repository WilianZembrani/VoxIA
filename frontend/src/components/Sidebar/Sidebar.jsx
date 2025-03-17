import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className="h-screen inline-flex flex-col justify-between bg-[#f0f4f9] py-6 px-3.5">
            <div className="top">
                <img
                    onClick={() => setExtended(prev => !prev)}
                    className="block ml-2.5 cursor-pointer w-5"
                    src={assets.menu_icon}
                    alt=""
                />

                <div className="mt-12.5 inline-flex items-center gap-2.5 py-2.5 px-4 bg-[#e6eaf1] rounded-2xl text-gray-500 cursor-pointer">
                    <img className="w-5" src={assets.plus_icon} alt="" />
                    {extended ? <p>Novo Chat</p> : null}
                </div>
                {extended ? (
                    <div className="flex flex-col">
                        <p className="mt-7.5 mb-5">Recente</p>
                        <div className="flex items-center gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                            <img className="w-5" src={assets.message_icon} alt="" />
                            <p>oque é reatc?</p>
                        </div>
                    </div>
                ) : null}
            </div>

            <div className="flex flex-col">
                <div className="flex items-center gap-2.5 p-2.5  rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className="w-5" src={assets.question_icon} alt="" />
                    {extended ? <p>Ajuda</p> : null}
                </div>
                <div className="flex items-center gap-2.5 p-2.5  rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className="w-5" src={assets.history_icon} alt="" />
                    {extended ? <p>Atividades</p> : null}
                </div>
                <div className="flex items-center gap-2.5 p-2.5  rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    <img className="w-5" src={assets.setting_icon} alt="" />
                    {extended ? <p>Configurações</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
