import React from 'react';
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Deals from '../../components/Deals/Deals'
import NewArrival from '../../components/NewArrival/NewArrival'
import SavingZone from '../../components/SavingZone/SavingZone'
import Promotion from '../../components/Promotion/Promotion'
import Categories from '../../components/Categories/Categories'

import category1 from '../../assets/images/category_men/men_category1.png'
import category2 from '../../assets/images/category_men/men_category2.png'
import category3 from '../../assets/images/category_men/men_category3.png'
import category4 from '../../assets/images/category_men/men_category4.png'
import category5 from '../../assets/images/category_men/men_category5.png'
import category6 from '../../assets/images/category_men/men_category6.png'
import category7 from '../../assets/images/category_men/men_category7.png'
import category8 from '../../assets/images/category_men/men_category8.png'

import womanCategory1 from '../../assets/images/category_women/women_category1.png'
import womanCategory2 from '../../assets/images/category_women/women_category2.png'
import womanCategory3 from '../../assets/images/category_women/women_category3.png'
import womanCategory4 from '../../assets/images/category_women/women_category4.png'
import TopBrands from '../../components/TopBrands/TopBrands';
import Limelight from '../../components/Limelight/Limelight';
const mensCategory = [
    {title: 'Shirts', image:category1},
    {title: 'Printed T-Shirts', image:category2},
    {title: 'Plain T-Shirt', image:category3},
    {title: 'Polo T-Shirt', image:category4},
    {title: 'Hoodies & Sweetshirt', image:category5},
    {title: 'Jeans', image:category6},
    {title: 'Activewear', image:category7},
    {title: 'Boxers', image:category8},
]

const womenCategory = [
    {title: 'Hoodies & Sweetshirt', image:womanCategory1},
    {title: 'Coats & Parkas', image:womanCategory2},
    {title: 'Tees & T-Shirt', image:womanCategory3},
    {title: 'Boxers', image:womanCategory4},
]
const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Deals />
            <NewArrival />
            <SavingZone />
            <Promotion />
            <Categories title={'Categories For Men'} data={mensCategory} />
            <Categories title={'Categories For Women'} data={womenCategory} />
            <TopBrands/>
            <Limelight/>
        </>
    );
};

export default Home;