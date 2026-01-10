import React from "react"

const blogs = [
  {
    title: "How AI is Revolutionizing Document Management for Enterprises",
    date: "24 July, 2023",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    title: "Top 5 Fraud Prevention Strategies for Financial Institutions",
    date: "24 July, 2023",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
  {
    title: "The Future of OCR: From Basic Extraction to AI-Driven Intelligence",
    date: "24 July, 2023",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...",
  },
]

export default function Blog() {
  return (
    <section className="relative py-32 bg-white overflow-hidden max-lg:py-15">

      {/* DOT DECORATIONS */}
      <div className="absolute left-16 top-24 grid grid-cols-4 gap-3 -z-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
        ))}
      </div>

      <div className="absolute right-20 top-40 grid grid-cols-6 gap-3 -z-1">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="w-2 h-2 bg-gray-300 rounded-full" />
        ))}
      </div>

      {/* CONTENT */}
      <div className=" mx-auto px-35 max-lg:px-25 max-md:px-20 max-sm:px-13">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="font-raleway text-5xl font-semibold text-dark mb-6 max-md:text-4xl max-sm:text-3xl">
            Blogs
          </h2>
          <p className="font-manrope font-normal text-2xl inline-block bg-[linear-gradient(110deg,#CD6028_0%,#CD6028_45%,#3E6EB4_130%)]  
       bg-clip-text text-transparent max-w-2xl mx-auto max-md:text-lg max-sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry’s standard.
          </p>
        </div>

        {/* BLOG CARDS */}
        <div className="grid grid-cols-3 gap-20 max-lg:grid-cols-1 ">
          {blogs.map((blog, index) => (
            <div key={index} className="relative">

              {/* GRADIENT SHADOW */}
               <div className="   absolute  -left-8 -right-8  top-30 -bottom-8  rounded-2xl bg-gradient-to-r from-[#E9D5FF] via-[#DBEAFE] to-[#E9D5FF] "
  />

              {/* CARD */}
              <div className="relative bg-white rounded-2xl p-8 px-4 shadow-lg border border-gray-200 max-lg:p-5 ">
                <h3 className="font-raleway font-semibold text-lg text-dark mb-3 max-md:text-base">
                  {blog.title}
                </h3>

                <p className="text-sm text-blue-500 mb-4">
                  {blog.date}
                </p>

                <p className="font-manrope text-base text-[#696969] leading-relaxed">
                  {blog.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NAV BUTTONS */}
        <div className="flex justify-center gap-4 mt-16">
          <button className="w-12 h-12 rounded-xl bg-primary text-white text-xl">
            ←
          </button>
          <button className="w-12 h-12 rounded-xl bg-primary text-white text-xl">
            →
          </button>
        </div>

      </div>
    </section>
  )
}
