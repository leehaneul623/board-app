import React from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '../../Recoil';
import { BsEmojiSmileFill } from "react-icons/bs";

const MyPageContent = () => {
    const userInfo = useRecoilValue(userState)

    return (
        <div className="w-full sm:w-[1200px] md:w-[80%] h-[1187px] py-20 pt-20 p-[10%]">
            <div className='mt-24'>
                <img src="../board-img/profile.jpg" alt="" className='w-[40%] h-[70%]' />
            </div>
            <div className='flex items-center mt-10 text-xl'>
                <BsEmojiSmileFill className='mr-2' />
                <b>{`${userInfo.data.nickname}`} 님의 Page</b>
            </div>
            <div className='flex items-center w-[70%] h-[6%] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>{`${userInfo.data.name}`}</p>
            </div>
            <div className='flex items-center w-[70%] h-[6%] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>{`${userInfo.data.memberId}`}</p>
            </div>
            <div className='flex items-center w-[70%] h-[6%] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>******</p>
            </div>
        </div>
    );
};

export default MyPageContent;