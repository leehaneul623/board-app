import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../Recoil';

const MyPageContent = () => {
    const userInfo = useRecoilValue(userState)

    return (
        <div className="sm:w-[1100px] w-full h-[1187px] sm:ml-[10%] md:ml-[10%] lg:ml-[20%] ml-[10%] pt-16">
            <div className='flex items-end mt-24'>
                <img src="../board-img/profile.jpg" alt="" className='w-[250px] h-[270px]' />
                <b className='text-xl ml-6 '>{`${userInfo.data.nickname}`} 님의 Page</b>
            </div>
            <div className='flex items-center w-[70%] h-[70px] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>{`${userInfo.data.name}`}</p>
            </div>
            <div className='flex items-center w-[70%] h-[70px] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>{`${userInfo.data.memberId}`}</p>
            </div>
            <div className='flex items-center w-[70%] h-[70px] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>******</p>
            </div>
        </div>
    );
};

export default MyPageContent;