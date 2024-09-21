import Image from "next/image";

const Order = async () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <div className="md:grid grid-cols-2 ">
        {/* personal info */}

        <div className="md:p-4">
          {/* name */}
          <div className="relative  rounded-lg ">
            <input
              className="peer w-full rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
              type="text"
              placeholder=""
              name="name"
            />
            <label
              className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
              htmlFor="navigate_ui_input_33"
            >
              নাম
            </label>
          </div>
          {/* number */}
          <div className="relative  rounded-lg mt-4 ">
            <input
              className="peer w-full rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
              type="text"
              placeholder=""
              name="number"
            />
            <label
              className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
              htmlFor="navigate_ui_input_33"
            >
              মোবাইল নাম্বার
            </label>
          </div>

          {/* জেলা */}
          <div className="relative  rounded-lg mt-4 ">
            <input
              className="peer w-full rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
              type="text"
              placeholder=""
              name="jela"
            />
            <label
              className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
              htmlFor="navigate_ui_input_33"
            >
              জেলা
            </label>
          </div>
          {/* address */}
          <div className="relative  rounded-lg mt-4 ">
            <input
              className="peer w-full rounded-lg border border-sky-600 bg-transparent px-4 py-2 text-sky-600 focus:outline-none"
              type="text"
              placeholder=""
              name="address"
            />
            <label
              className="absolute -top-2 left-2 rounded-md bg-sky-600 px-2 text-xs text-sky-100 duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-400 peer-focus:-top-2 peer-focus:bg-sky-600 peer-focus:text-xs peer-focus:text-sky-100"
              htmlFor="navigate_ui_input_33"
            >
              ঠিকানা
            </label>
          </div>
          <button className="bg-primary text-white w-[144px] py-3 rounded mt-8">
            অর্ডার করুন
          </button>
        </div>

        {/* duck info */}
        <div className="md:p-4">
          <div className="flex items-center justify-between border p-2 rounded bg-primary text-white font-bold">
            <div className="">জাত</div>
            <div className="">দর</div>
            <div className="">পরিমান</div>
            <div className="">মোট</div>
          </div>

          {/* products */}

          <div className="flex items-center justify-between border p-2 rounded">
            <div className="">পিকেন স্টার ১৩</div>
            <div className="">১২০ টাকা</div>
            <div className="">
              <input
                className="rounded-lg border w-20  border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                type="number"
                placeholder="পিছ"
              />
            </div>
            <div className="">মোট ১৫০</div>
          </div>
          {/* products */}

          <div className="flex items-center justify-between border p-2 rounded">
            <div className="">পিকেন স্টার ১৩</div>
            <div className="">১২০ টাকা</div>
            <div className="">
              <input
                className="rounded-lg border w-20  border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none"
                type="number"
                placeholder="পিছ"
              />
            </div>
            <div className="">মোট ১৫০</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
