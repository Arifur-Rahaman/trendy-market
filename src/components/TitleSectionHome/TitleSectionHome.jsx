import React from 'react';
import Rectangle from '../Rectangle/Rectangle';

const TitleSectionHome = ({text}) => {
    return (
        <div className='flex items-center gap-5 leading-8 mb-12'>
            <Rectangle />
            <h2 className='text-3xl font-semibold font-[#3C4242]'>{text}</h2>
        </div>
    );
};

export default TitleSectionHome;