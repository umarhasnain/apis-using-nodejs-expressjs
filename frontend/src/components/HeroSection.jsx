import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-6 md:px-12 lg:px-28 py-12 lg:py-24 flex-col md:flex-row items-center">
          {/* Text Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 md:pr-8 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-gray-900">
              〈 JSON 〉APIS
            </h1>
            <h2 className="title-font mx-2 sm:mx-6 sm:text-3xl text-2xl mb-4 font-medium text-gray-900">
              Free fake and reliable API for testing and prototyping.
            </h2>
            <p className="mx-2 sm:mx-6 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Serving ~3 billion requests each month.
            </p>
          </div>

          {/* Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/assets/imgs/rest-api.avif"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
