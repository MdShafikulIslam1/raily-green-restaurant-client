import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import featured from '../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <section className="featured text-white bg-fixed">
            <SectionTitle subHeading={"Check it Out"} heading={"From our Menu"}></SectionTitle>
            <div className='md:flex justify-center items-center my-10 gap-6 py-16 px-24'>
                <img className='md:w-1/2' src={featured} alt="" />
                <div className='space-y-2'>
                    <p>Aug 05,2023</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis repellat quis dolores assumenda quas rem dolorem iste tenetur corrupti saepe laboriosam quasi vitae ratione distinctio veritatis dolore, minus deleniti exercitationem, dolorum provident vero nostrum consectetur aspernatur. Aliquid repudiandae nobis beatae?</p>
                  <button className='btn btn-outline btn-primary border-0 border-b-4'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;