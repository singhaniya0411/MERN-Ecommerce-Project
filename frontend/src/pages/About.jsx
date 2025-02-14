import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>

        <Title text1={"About"} text2={"Us"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4'>
          <p>Welcome to Embussshh, your one-stop destination for trendsetting fashion that blends style, comfort, and affordability. At Embussshh, we believe clothing is more than just fabric – it's a statement of who you are. Our carefully curated collections are designed to cater to a wide range of tastes, ensuring that everyone finds something that resonates with their personal style.</p>
          <p> Whether you're looking for chic everyday wear or bold, standout pieces, we've got you covered. We're passionate about delivering quality products that make you feel confident, and our mission is to provide an effortless shopping experience for fashion lovers everywhere. Step into the world of Embussshh, and redefine your wardrobe with the latest trends!</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>At Embussshh, our mission is to provide high-quality, stylish, and affordable clothing that helps individuals express their unique identity. We strive to offer a seamless shopping experience, making fashion accessible, inclusive, and empowering for everyone.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={"Why"} text2={'Us ?'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-10 py-8 sm:py-15 flex flex-col gap-5'>
          <b>Convinience:</b>
          <p className='text-gray-600'>At Embussshh, we prioritize your shopping experience by making it as easy and seamless as possible. From user-friendly website navigation to secure payment options, we ensure that every step of your journey is simple and stress-free. </p>
        </div>
        <div className='border px-10 md:px-10 py-8 sm:py-15 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Embussshh, we ensure top-quality by selecting the best materials and carefully inspecting each piece. Our commitment to durability, comfort, and style means you can shop with confidence, knowing every item is made to last.</p>
        </div>
        <div className='border px-10 md:px-10 py-8 sm:py-15 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We prioritize your satisfaction at Embussshh. Our dedicated team is ready to assist with any inquiries, ensuring a smooth, enjoyable shopping experience. We're here to offer friendly, personalized support whenever you need it.</p>
        </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
