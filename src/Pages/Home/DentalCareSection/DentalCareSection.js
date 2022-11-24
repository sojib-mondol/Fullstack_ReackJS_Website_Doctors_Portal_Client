import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const DentalCareSection = () => {
    return (
        <div className="mt-8 card lg:card-side bg-base-100 shadow-xl">
            <div className='p-8 '><img className='rounded ' src={treatment} alt="Album"/></div>
            <div className="card-body">
                <h2 className="card-title font-bold text-[30px]">Exceptional Dental <br /> Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                <button className="btn btn-primary">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCareSection;