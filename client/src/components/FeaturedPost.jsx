import { Link } from "react-router-dom";
import Image from "./Image";
function FeaturedPost() {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* FIRST POST */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        <Image
          src={"featured1.jpeg"}
          className={"rounded-3xl object-cover"}
          w={"895"}
        />
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web Design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* titles */}
        <Link
          to={"/test"}
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
          ratione!
        </Link>
      </div>

      {/* OTHERS POST */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* second */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src={"featured2.jpeg"}
              className={"rounded-3xl object-cover w-full h-full"}
              w={"298"}
            />
          </div>
          {/* details and titles */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <div className="text-gray-500 text-sm">2 days ago</div>
            </div>
            {/* titles */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              doloremque consectetur molestiae doloribus incidunt deleniti
              beatae est nulla, quod ullam!
            </Link>
          </div>
        </div>
        {/* third */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src={"featured3.jpeg"}
              className={"rounded-3xl object-cover w-full h-full"}
              w={"298"}
            />
          </div>
          {/* details and titles */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">03.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <div className="text-gray-500 text-sm">2 days ago</div>
            </div>
            {/* titles */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              doloremque consectetur molestiae doloribus incidunt deleniti
              beatae est nulla, quod ullam!
            </Link>
          </div>
        </div>
        {/* fourth */}
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src={"featured4.jpeg"}
              className={"rounded-3xl object-cover w-full h-full"}
              w={"298"}
            />
          </div>
          {/* details and titles */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">04.</h1>
              <Link className="text-blue-800">Web Design</Link>
              <div className="text-gray-500 text-sm">2 days ago</div>
            </div>
            {/* titles */}
            <Link
              to={"/test"}
              className="text-base sm:text-lg md:text-xl lg:text-lg font-medium"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              doloremque consectetur molestiae doloribus incidunt deleniti
              beatae est nulla, quod ullam!
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default FeaturedPost;
