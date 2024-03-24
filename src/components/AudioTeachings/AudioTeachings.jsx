import { Link } from "react-router-dom";

export function AudioTeachings() {
  const teachingsRoute = [
    {
      source: "/assets/teaching1.png",
      link: "",
    },

    {
      source: "/assets/teaching2.png",
      link: "",
    },

    {
      source: "/assets/teaching3.png",
      link: "",
    },

    {
      source: "/assets/teaching4.png",
      link: "",
    },

    {
      source: "/assets/teaching5.png",
      link: "",
    },

    {
      source: "/assets/teaching6.png",
      link: "",
    },
  ];
  return (
    <>
      <div className="pt-10 px-4 mt-20">
        <div className="text-center">
          <h1 className=" font-bold md:text-4xl text-2xl ">
            Welcome To Our Official Website
          </h1>
          <p className="mt-5 mb-5 font-medium md:text-2xl text-xl">
            At Believers&apos; LifeLine Assembly, we strongly emphasize the
            knowledge of God&apos;s word...{" "}
          </p>
          <Link
            className="md:ml-96  md:font-semibold font-medium md:text-2xl text-xl text-[#e7b70d]"
            to="/Read More"
          >
            Read more
          </Link>
        </div>

        <h1 className=" md:mb-10 md:mt-20 mt-10 md:ms-12 md:font-bold font-semibold md:text-4xl text-2xl">
          Download Teachings
        </h1>
        <main className="mt-10 md:mt-20 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
          <button className="font-semibold text-lg md:text-xl bg-[#d9d9d9] px-3 md:px-4 py-1 md:py-2 rounded-3xl rounded-xl bg-[#d9d9d9] hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
            All teachings
          </button>
          <button className="font-semibold text-lg md:text-xl bg-[#d9d9d9] px-3 md:px-4 py-1 md:py-2 rounded-3xl rounded-xl bg-[#d9d9d9] hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
            2020 Teachings
          </button>
          <button className="font-semibold text-lg md:text-xl bg-[#d9d9d9] px-3 md:px-4 py-1 md:py-2 rounded-3xl rounded-xl bg-[#d9d9d9] hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
            2022 Teachings
          </button>
          <button className="font-semibold text-lg md:text-xl bg-[#d9d9d9] px-3 md:px-4 py-1 md:py-2 rounded-3xl rounded-xl bg-[#d9d9d9] hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
            2023 Teachings
          </button>
        </main>
      </div>

      {/* make it an array map */}
      <div className="flex justify-center">
        {" "}
        {/* Wrapping div to center the grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-10">
          {teachingsRoute.map((teachingRoute, i) => (
            <Link key={i} className="" to={teachingRoute.link}>
              <img src={teachingRoute.source} alt="" />
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto bg-white py-20 w-max">
        <button className="mx-1 bg-[#d9d9d9] p-4 hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
          1
        </button>
        <button className="mx-1 bg-[#d9d9d9] p-4 hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
          2
        </button>
        <button className="mx-1 bg-[#d9d9d9] p-4 hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
          3
        </button>
        <button className="mx-1 bg-[#d9d9d9] p-4 hover:bg-[#e7b70d] transition-colors duration-500 ease-in-out">
          4
        </button>
      </div>
    </>
  );
}
