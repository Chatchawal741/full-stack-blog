import React from "react";
import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPost from "../components/FeaturedPost";
import PostList from "../components/PostList";

function Homepage() {
  return (
    <div className="mt-4 flex flex-col gap-4">
      Homepage
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to={"/"}>Home</Link>
        <span>&middot;</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div>
          <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
            adipisci.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ea
            ipsa facilis quam reiciendis rem.
          </p>
        </div>
        {/* animated button */}
        <Link to={"write"} className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150, 0 a 75,75 0 1, 1 -150,0"
              fill="none"
            />

            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea
              </textPath>
            </text>
          </svg>
          <button className="bg-blue-800 rounded-full flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.4697 15.5303C17.6842 15.7448 18.0068 15.809 18.287 15.6929C18.5673 15.5768 18.75 15.3033 18.75 15V6C18.75 5.58579 18.4142 5.25 18 5.25L9.00002 5.25C8.69668 5.25 8.4232 5.43273 8.30711 5.71299C8.19103 5.99324 8.25519 6.31583 8.46969 6.53033L17.4697 15.5303Z"
                fill="#ffffff"
              />
              <path
                d="M5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L13.5 11.5607L12.4393 10.5L5.46967 17.4697Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPost />
      {/* POST LIST */}
      <div className="mt-8">
        {/* title */}
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
}

export default Homepage;
