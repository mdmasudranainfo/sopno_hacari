"use client";

const Page = () => {
  return (
    <div className="mx-auto w-full  space-y-4 rounded-lg border bg-white p-7 shadow-lg sm:p-10 ">
      <h1 className="text-3xl font-semibold tracking-tight">Product</h1>

      <form action="#" className="space-y-6">
        <div className="space-y-2 text-sm">
          <label
            htmlFor="username"
            className="block text-zinc-700  font-medium"
          >
            Name
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none "
            id="username"
            placeholder="Enter Name"
            name="name"
            type="text"
            required
          />
        </div>
        <div className="space-y-2 text-sm">
          <label htmlFor="Price" className="block text-zinc-700  font-medium">
            Price
          </label>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none "
            id="Price"
            placeholder="Enter Price"
            name="Price"
            type="number"
            required
          />
          <div className="flex justify-end text-xs">
            <a href="#" className="text-zinc-700 hover:underline ">
              Forgot Password?
            </a>
          </div>
        </div>
        <button className="rounded-md bg-sky-500 px-4 py-2 text-white transition-colors hover:bg-sky-600 dark:bg-sky-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
