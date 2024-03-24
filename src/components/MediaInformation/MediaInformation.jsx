import { Link } from "react-router-dom";

export function MediaInformation() {
  return (
    <>
      <div className="flex flex-wrap justify-evenly mb-20 mt-10 px-4 gap-4">
        <div className="bg-[#d9d9d9] flex flex-col gap-6 px-4 pb-10 md:pb-20 w-full md:w-[300px] md:px-6">
          <div className="my-5">
            <h2 className="font-bold md:text-lg text-xl ">RECENT NEWS</h2>
            <hr className="border-b-solid border-b-[#e7b70d] border-b-4 mt-2" />
          </div>
          <Link to="">
            <p className="font-medium text-base px-2 py-2 bg-[white]">
              Important announcements from Pastor...
            </p>
          </Link>
          <Link>
            <p className="font-medium text-base px-2 py-2 bg-[white]">
              Our updated meeting times...
            </p>
          </Link>
          <Link>
            <p className="font-medium text-base px-2 py-2 bg-[white]">
              We now have two branches in...
            </p>
          </Link>
          <Link>
            <p className="font-medium text-base px-2 py-2 bg-[white]">
              Updated list of all our cell centers in Port...
            </p>
          </Link>
          <Link>
            <p className="font-medium text-base px-2 py-2 bg-[white]">
              Register for our upcoming retreat in...
            </p>
          </Link>
        </div>

        <div className="bg-[#d9d9d9] flex flex-col gap-6 px-4 pb-10 md:pb-20 w-full md:w-[300px] md:px-6">
          <div className="my-5">
            <h2 className="font-bold md:text-lg text-xl ">CONNECT WITH US</h2>
            <hr className="border-b-solid border-b-[#e7b70d] border-b-4 mt-2" />
          </div>
          <Link>
            <img className="" src="/assets/facebook.png" alt="" />
          </Link>
          <Link>
            <img className="" src="/assets/Instagram.png" alt="" />
          </Link>
          <Link>
            <img className="" src="/assets/Youtube.png" alt="" />
          </Link>
        </div>

        <div className="bg-[#d9d9d9] flex flex-col gap-6 px-4 pb-10 md:pb-20 w-full md:w-[300px] md:px-6">
          <div className="mt-7 mb-5">
            <h2 className="font-bold md:text-lg text-lg text-xl ">GALLERY</h2>
            <hr className="border-b-solid border-b-[#e7b70d] border-b-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4">
            <div className="text-base font-medium bg-white h-[80px]">1</div>
            <div className="text-base font-medium bg-white h-[80px]">2</div>
            <div className="text-base font-medium bg-white h-[80px] md:col-span-2">
              3
            </div>
            <div className="text-base font-medium bg-white h-[80px]">4</div>
            <div className="text-base font-medium bg-white h-[80px]">5</div>
          </div>
        </div>
      </div>
      <footer className="h-52 mt-10 bg-[#d9d9d9] flex justify-center pl-3">
        <p className="self-center  font-bold">
          <b>&copy;</b> Copyright BLA 2023. All Right Reserved. Designed and
          Developed by BLA IT DEPARTMENT
        </p>
      </footer>
    </>
  );
}
