import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../Recoil';

const MyPageContent = () => {
    const userInfo = useRecoilValue(userState)

    return (
        <div className="w-full sm:w-[1100px] h-[1187px] p-[10%]">
            <div className='flex mt-24'>
                <img src="../board-img/profile.jpg" alt="" className='w-[40%] h-[70%]' />
                <b className='text-xl mt-[30%] ml-[5%]'>{`${userInfo.data.nickname}`} 님의 Page</b>
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