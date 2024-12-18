import Image from "next/image";

const Hero = () => {
  return (
    <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      {/* Background Image */}
      <Image
        src="https://i.ibb.co.com/b1DKMzH/1-0.jpg"
        loading="lazy"
        alt="Photo by Fakurian Design"
        className="absolute rounded-lg inset-0  object-cover object-center"
        height={1080}
        width={1920}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-300 mix-blend-multiply"></div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
        <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
          Very proud to introduce
        </p>
        <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
          Revolutionary way to build the web
        </h1>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
         
         {/* search box change korte hobe */}
         <input placeholder="Email" className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
