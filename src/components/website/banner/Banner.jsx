import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto justify-items-center pt-28">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14 items-center">
          <div className="">
            <h1 className="sm:text-[64px] text-5xl font-extrabold leading-none">
              একদিন বয়সের <br />
              হাসের বাচ্চা <br />
              <span className="text-primary"> বিক্রয় করা হয়</span>
            </h1>
            <p className="mb-10 mt-6">
              আমারা বাংলাদেশের সব জায়গায় ডেলিভেরি দিয়ে থাকি
            </p>
            {/* <!-- input  --> */}
            <div className="flex items-center w-[470px] max-w-full relative">
              {/* <!-- email Icon --> */}
              <span className="absolute h-full left-2 top-0 flex items-center">
                <i className="fa-regular fa-envelope"></i>
              </span>
              {/* <input
                className="w-full focus:outline-none p-3 rounded pl-8"
                type="email"
                placeholder="Enter Your Email"
              /> */}

              <button className="bg-primary text-white rounded w-[144px] py-3 ml-[20px] ">
                অর্ডার করুন
              </button>
            </div>
          </div>

          <div className="flex items-end">
            <Image
              src="/image/headerImg.png" // Path to your image in the public directory
              alt="Description of the image" // Add a descriptive alt text
              width={600} // Specify the width of the image
              height={600} // Specify the height of the image
              layout="responsive" // Makes the image responsive
              className="max-w-full w-[600px]" // Tailwind CSS classes for styling
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
