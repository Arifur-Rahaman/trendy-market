import React from 'react';
import TitleSectionHome from '../TitleSectionHome/TitleSectionHome';
import category1 from '../../assets/images/category_men/men_category1.png'
import category2 from '../../assets/images/category_men/men_category2.png'
import category3 from '../../assets/images/category_men/men_category3.png'
import category4 from '../../assets/images/category_men/men_category4.png'
import category5 from '../../assets/images/category_men/men_category5.png'
import category6 from '../../assets/images/category_men/men_category6.png'
import category7 from '../../assets/images/category_men/men_category7.png'
import category8 from '../../assets/images/category_men/men_category8.png'
import CategoryItem from './CategoryItem/CategoryItem';
const data = [
    {title: 'Shirts', image:category1},
    {title: 'Printed T-Shirts', image:category2},
    {title: 'Plain T-Shirt', image:category3},
    {title: 'Polo T-Shirt', image:category4},
    {title: 'Hoodies & Sweetshirt', image:category5},
    {title: 'Jeans', image:category6},
    {title: 'Activewear', image:category7},
    {title: 'Boxers', image:category8},
]
const Categories = ({title}) => {
    return (
        <div className='container mx-auto'>
            <TitleSectionHome text={title}/>
            {
                <div className='grid grid-cols-4 gap-12'>
                    {
                        data.map((item)=>(<CategoryItem item={item}/>))
                    }
                </div>
            }
        </div>
    );
};

export default Categories;