import React from 'react';
import TitleSectionHome from '../TitleSectionHome/TitleSectionHome';
import CategoryItem from './CategoryItem/CategoryItem';

const Categories = ({title, data}) => {
    return (
        <div className='container mx-auto mb-24'>
            <TitleSectionHome text={title}/>
            {
                <div className='grid grid-cols-4 gap-12'>
                    {
                        data.map((item)=>(<CategoryItem key={item.title} item={item}/>))
                    }
                </div>
            }
        </div>
    );
};

export default Categories;