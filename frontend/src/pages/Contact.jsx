import React from "react";
import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px] "
          src="https://singhaniya0411.github.io/MERN-Ecommerce-Project/contact_img.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600 text-xl">Our Store</p>
          <p className="text-gray-500">
            4059 95th St <br />
            Elmhurst, New York(NY), 11373
          </p>
          <p className="text-gray-500">
            Tel : (772) 555-9808 <br />
            Email : admin@embussshh.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about out team and jobs openings.
          </p>
          <button className="border border-black px-6 py-2 text-sm hover:bg-black hover:text-white hover:px-8 hover:py-4 transition-all duration-300">
            Explore
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;
