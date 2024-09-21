const AboutUs = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
        <div className="">
          <img src="/image/about.png" alt="" />
        </div>
        <div className="">
          <h3 className="text-sm font-semibold text-primary uppercase">
            আমাদের বিষয়ে
          </h3>
          <h1 className="text-[48px] font-bold leading-[48px] my-9">
            আমরা দীর্ঘ দিন ধরে বাংলাদেশে <br />
          </h1>
          <p className="border-b pb-8">
            বিশ্বাসের সাথে বাংলাদেশের <br />
            কর্ষকদের সাথে কাজ করে আসছি
          </p>

          <div className="mt-8">
            {/* <div className="flex items-center gap-5">
              <img src="/image/icone/Ic-Simple.png" alt="" />
              <div className="">
                <h2 className="text-xl font-bold">Flexible Classes</h2>
                <p>Created by our talented designer</p>
              </div>
            </div> */}
            <div className="flex items-center gap-5 mt-8">
              <img src="/image/icone/Ic-Simple-1.png" alt="" />
              <div className="">
                <h2 className="text-xl font-bold">যেকোন প্রয়োজনে কল করুন</h2>
                <p>01886818037</p>
              </div>
            </div>
          </div>

          <a href="tel:01886818037">
            <button className="bg-primary text-white w-[144px] py-3 rounded mt-8">
              কল করুন
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
