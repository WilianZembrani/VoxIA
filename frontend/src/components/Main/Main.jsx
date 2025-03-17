import React from 'react';
import { assets } from '../../assets/assets';

const Main = () => {
    return (
        <div className="flex-1 min-h-screen pb-[15vh] relative">
            <div className="flex items-center justify-between p-5 text-[#585858]">
                <p className="text-2xl">VoxAI</p>
                <img className="w-10 rounded-3xl" src={assets.user_icon} alt="" />
            </div>
            <div className="w-[900px] m-auto">
                <div className="my-12.5 mx-0 text-[56px] text-[#c4c7c5] font-medium p-5">
                    <p>
                        <span className="text-gradient">Olá, Dev</span>
                    </p>
                    <p>Como posso ajudar você hoje?</p>
                </div>
                <div className="grid grid-cols-4 gap-3.5 p-5">
                    <div className="h-[200px] p-3.5 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className="text-[#585858] text-[17px]">Como posso criar um site para o meu negócio?</p>
                        <img
                            className="w-8.5 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                            src={assets.compass_icon}
                            alt=""
                        />
                    </div>
                    <div className="h-[200px] p-3.5 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className="text-[#585858] text-[17px]">Qual a melhor forma de aprender algo novo?</p>
                        <img
                            className="w-8.5 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                            src={assets.bulb_icon}
                            alt=""
                        />
                    </div>
                    <div className="h-[200px] p-3.5 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className="text-[#585858] text-[17px]">Preciso de um aplicativo para minha empresa?</p>
                        <img
                            className="w-8.5 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                            src={assets.message_icon}
                            alt=""
                        />
                    </div>
                    <div className="h-[200px] p-3.5 bg-[#f0f4f9] rounded-2xl relative cursor-pointer hover:bg-[#dfe4ea]">
                        <p className="text-[#585858] text-[17px]">Como posso automatizar tarefas do meu dia a dia?</p>
                        <img
                            className="w-8.5 p-1.5 absolute bg-white rounded-[20px] bottom-2.5 right-2.5"
                            src={assets.code_icon}
                            alt=""
                        />
                    </div>
                </div>
                <div className='absolute bottom-0 w-full max-w-[900px] py-0 px-5 m-auto'>
                    <div className='flex items-center justify-between gap-3 bg-[#f0f4f9] px-5 py-2.5 rounded-full'>
                        <input className='flex-1 bg-transparent border-none outline-none p-2 text-[16px]' type="text" placeholder='Pergunte alguma coisa' />
                        <div className='flex flex-row items-center gap-4'>
                            <img className='w-6 cursor-pointer' src={assets.gallery_icon} alt="" />
                            <img className='w-6 cursor-pointer' src={assets.mic_icon} alt="" />
                            <img className='w-6 cursor-pointer' src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='flex justify-center items-center text-[15px] m-4 font-light'>
                        O VoxIA pode não ser perfeito. Sempre verifique informações importantes.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
