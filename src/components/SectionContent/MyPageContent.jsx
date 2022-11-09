import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../Recoil';

const MyPageContent = () => {
    const userInfo = useRecoilValue(userState)

    return (
        <div className="w-[1100px] h-[1187px] pt-16">
            <div className='flex items-end mt-24'>
                <img src="../board-img/profile.jpg" alt="" className='w-[250px] h-[270px]' />
                <b className='text-xl ml-6 '>{`${userInfo.data.nickname}`} 님의 Page</b>
            </div>
            <div className='flex items-center w-[800px] h-[70px] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>{`${userInfo.data.name}`}</p>
            </div>
            <div className='flex items-center w-[800px] h-[70px] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>{`${userInfo.data.memberId}`}</p>
            </div>
            <div className='flex items-center w-[800px] h-[70px] bg-white rounded-3xl mt-10 shadow-md pl-4'>
                <p>******</p>
            </div>
            <div className="text-lg mt-10">변경 할 Password</div>
            <input
                type="text"
                placeholder='Password'
                className='w-[800px] h-[70px] bg-white rounded-3xl mt-2 shadow-md pl-4'

            />
            <div className='mt-10 ml-[650px]'>
                <button className="w-[150px] h-[55px] bg-[#ABDEFF] rounded-full">
                    <p className="text-white">Edit</p>
                </button>
            </div>
        </div>
    );
};

export default MyPageContent;