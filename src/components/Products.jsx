import { section } from "framer-motion/client";
import React from "react";
import bgCircle from "../assets/images/Circle2.png";
import smDots6 from "../assets/icons/dotsmall-6.png";
import Button from "./Button";
import Product1 from "../assets/images/product1.png";
import bgCircle1 from "../assets/images/Circle1.png";
import Product2 from "../assets/images/product2.png";
import Product3 from "../assets/images/product3.png";

function Products() {
  return (
    // section 1
    <>
      <section className="w-full h-screen relative max-lg:h-auto max-md:h-auto">
        {/* background */}
        <div className="bg-image absolute right-0 bottom-20 -z-1">
          <img src={bgCircle} alt="Circe bg Image" />
        </div>
        <div className="bg-image  absolute top-10 -z-1">
          <img src={smDots6} alt="dot bg Image" />
        </div>
        {/* title-section */}
        <div className="product-text text-center pt-15 max-lg:pt-2 pb-2">
          <p
            className=" font-manrope font-semibold text-2xl font-manrope  inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent mb-2 max-md:text-xl max-sm:text-lg"
          >
            features and benefits.
          </p>
          <h2 className=" font-raleway font-semibold text-5xl text-dark max-md:text-4xl max-sm:text-3xl">
            Our Products
          </h2>
        </div>
        {/* content */}
        <div className="product-content flex items-center justify-around content-center py-20 max-lg:flex-col-reverse max-lg:py-6 max-sm:px-5">
          {/* left-text */}
          <div className="left-text z-20 max-lg:mt-5">
            <Button
              className="px-7 py-4 mb-3
  bg-[linear-gradient(100deg,#CD6028_20%,#CD6028_10%,#3E6EB4_80%)]
  text-xl/5 text-white font-semibold font-manrope tracking-widest max-md:text-lg max-md:px-5 max-md:py-2"
            >
              DocSim
            </Button>
            <h3 className="font-raleway text-dark text-3xl/12 font-semibold max-md:text-2xl">
              AI-Powered Document Similarity <br /> Engine
            </h3>
            {/* text list */}
            <div className="mb-6">
              <p className="font-raleway font-bold text-xl text-[#696969] mb-2 max-md:text-lg">
                Features:
              </p>
              <ul className=" font-manrope font-normal text-base/8 list-disc list-inside text-[#696969]  space-y-1 max-md:text-sm">
                <li>Detects near-duplicates and tampered documents.</li>
                <li>
                  Identifies fraudulent patterns across large repositories.
                </li>
                <li>Multi-language support for global adaptability.</li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="font-raleway font-bold text-xl text-[#696969] mb-2 max-md:text-lg">
                Benefits:
              </p>
              <ul className=" font-manrope font-normal text-base/8 list-disc list-inside text-[#696969]  space-y-1 max-md:text-sm">
                <li>Save 30% time on manual checks.</li>
                <li>Reduce document fraud by up to 40%.</li>
              </ul>
            </div>
            {/* buttons */}
            <div className="buttons mt-6">
              <Button className="px-16 py-4 mr-10 bg-primary text-base text-white max-md:px-13 max-md:py:3 max-md:text-sm max-sm:px-5 max-sm:py-4 max-sm:mr-4">
                Learn More
              </Button>
              <Button className="px-13 py-4 bg-primary text-base text-white max-md:px-13 max-md:py:3 max-md:text-sm max-sm:px-5 max-sm:py-4">
                Schedule a Demo
              </Button>
            </div>
          </div>
          <div className="right-image z-1">
            <img src={Product1} alt="Product image " />
          </div>
        </div>
      </section>

      {/* section 2   */}

      <section className="w-full h-screen relative max-lg:h-auto max-md:h-auto">
        {/* background */}
        <div className="bg-image absolute left-0 bottom-20">
          <img src={bgCircle1} alt="Circe bg Image" />
        </div>
        <div className="bg-image  absolute top-10">
          <img src={smDots6} alt="dot bg Image" />
        </div>
        {/* content */}
        <div className="product-content flex items-center justify-around  py-60 flex-row-reverse max-lg:flex-col-reverse max-lg:py-30 max-sm:px-6 max-sm:py-5 ">
          {/* left-text */}
          <div className="left-text z-20 max-lg:mt-5">
            <Button
              className="px-7 py-4 mb-3
  bg-[linear-gradient(100deg,#CD6028_20%,#CD6028_10%,#3E6EB4_80%)]
  text-xl/5 text-white font-semibold font-manrope tracking-widest max-md:text-lg max-md:px-5 max-md:py-2"
            >
              DocPilot
            </Button>
            <h3 className="font-raleway text-dark text-3xl/12 font-semibold max-md:text-2xl">
              Streamline Document Workflows with <br /> Automation
            </h3>
            {/* text list */}
            <div className="mb-6">
              <p className="font-raleway font-bold text-xl text-[#696969] mb-2">
                Features:
              </p>
              <ul className=" font-manrope font-normal text-base/8 list-disc list-inside text-[#696969]  space-y-1 max-md:text-sm">
                <li>
                  Automates document collection, routing, and task assignments.
                </li>
                <li> Real-time tracking with advanced dashboards.</li>
                <li>Seamless integration with enterprise systems via APIs.</li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="font-raleway font-bold text-xl text-[#696969] mb-2">
                Benefits:
              </p>
              <ul className=" font-manrope font-normal text-base/8 list-disc list-inside text-[#696969]  space-y-1 max-md:text-sm">
                <li>Reduce turnaround times by 50%.</li>
                <li>
                  Improve operational efficiency with minimal manual effort.
                </li>
              </ul>
            </div>
            {/* buttons */}
            <div className="buttons mt-6">
              <Button className="px-16 py-4 mr-10 bg-primary text-base text-white max-md:px-13 max-md:py:3 max-md:text-sm max-sm:px-5 max-sm:py-4 max-sm:mr-4">
                Learn More
              </Button>
              <Button className="px-13 py-4 bg-primary text-base text-white max-md:px-13 max-md:py:3 max-md:text-sm max-sm:px-5 max-sm:py-4 ">
                Schedule a Demo
              </Button>
            </div>
          </div>
          <div className="right-image z-1">
            <img src={Product2} alt="Product image " />
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="w-full h-screen relative max-lg:h-auto max-md:h-auto">
        {/* background */}
        <div className="bg-image absolute right-0 bottom-40">
          <img src={bgCircle} alt="Circe bg Image" />
        </div>
        <div className="bg-image  absolute top-5">
          <img src={smDots6} alt="dot bg Image" />
        </div>
        {/* content */}
        <div className="product-content flex items-center justify-around py-60  max-lg:flex-col-reverse max-lg:py-30 max-sm:px-6 max-sm:py-5">
          {/* left-text */}
          <div className="left-text z-20 max-lg:mt-5">
            <Button
              className="px-7 py-4 mb-3
  bg-[linear-gradient(100deg,#CD6028_20%,#CD6028_10%,#3E6EB4_80%)]
  text-xl/5 text-white font-semibold font-manrope tracking-widest max-md:text-lg max-md:px-5 max-md:py-2"
            >
              Doxtract
            </Button>
            <h3 className="font-raleway text-dark text-3xl/12 font-semibold max-md:text-2xl">
              Extract, Validate, and Process <br /> Documents with Ease
            </h3>
            {/* text list */}
            <div className="mb-6">
              <p className="font-raleway font-bold text-xl text-[#696969] mb-2">
                Features:
              </p>
              <ul className=" font-manrope font-normal text-base/8 list-disc list-inside text-[#696969]  space-y-1 max-md:text-sm">
                <li>OCR and NLP-based data extraction.</li>
                <li>Handles unstructured documents across industries.</li>
                <li>Validates fields using external data sources</li>
              </ul>
            </div>
            <div className="mb-8">
              <p className="font-raleway font-bold text-xl text-[#696969] mb-2">
                Benefits:
              </p>
              <ul className=" font-manrope font-normal text-base/8 list-disc list-inside text-[#696969]  space-y-1 max-md:text-sm">
                <li>Process 10,000+ documents in minutes.</li>
                <li> Achieve 99% data accuracy with AI-driven validation.</li>
              </ul>
            </div>
            {/* buttons */}
            <div className="buttons mt-6">
              <Button className="px-16 py-4 mr-10 bg-primary text-base text-white max-md:px-13 max-md:py:3 max-md:text-sm max-sm:px-5 max-sm:py-4 max-sm:mr-4">
                Learn More
              </Button>
              <Button className="px-13 py-4 bg-primary text-base text-white max-md:px-13 max-md:py:3 max-md:text-sm max-sm:px-5 max-sm:py-4">
                Schedule a Demo
              </Button>
            </div>
          </div>
          {/* right image */}
          <div className="right-image z-1 max-md:w-full max-md:flex max-md:justify-center">
            <img src={Product3} alt="Product image " />
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
