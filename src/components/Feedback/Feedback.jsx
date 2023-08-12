import React from 'react';
import TitleSectionHome from '../TitleSectionHome/TitleSectionHome';
import image1 from '../../assets/images/feedback_image/feedback1.png'
import image2 from '../../assets/images/feedback_image/feedback2.png'
import image3 from '../../assets/images/feedback_image/feedback3.png'

const data = [
    {
        id: '1',
        name: 'Floyd Miles',
        image: image1,
        review: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
    },
    {
        id: '2',
        name: 'Ronald Richards',
        image: image2,
        review: `ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
    },
    {
        id: '3',
        name: 'Savannah Nguyen',
        image: image3,
        review: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.`
    },
]
const Feedback = () => {
    return (
        <div className='container mx-auto mb-24'>
            <TitleSectionHome text={'Feedback'} />
            <div className='grid grid-cols-3 gap-6'>
                {
                    data.map(review => (
                        <div key={review.id} className='p-6 rounded-lg border-2 border-[#BEBCBD]'>
                            <div className='mb-5 flex justify-between items-start'>
                                <img src={review?.image} className='h-14 w-14' />
                                <div className='flex'>
                                    {
                                        Array(5).fill(0).map((_, i) => (
                                            <span key={i}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M11.8459 16.8835L17.8183 20.4882L16.2334 13.6943L21.51 9.12325L14.5615 8.53374L11.8459 2.12646L9.13035 8.53374L2.18188 9.12325L7.45846 13.6943L5.87356 20.4882L11.8459 16.8835Z" fill="#EDD146" />
                                                </svg>
                                            </span>
                                        ))
                                    }
                                </div>
                            </div>
                            <h6 className='mb-5 text-[#3C4242] font-medium text-[1.5rem]'>{review?.name}</h6>
                            <span className='overflow-hidden text-[#807D7E] text-sm font-normal'>{review.review}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Feedback;