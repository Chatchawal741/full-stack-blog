import { Link } from "react-router-dom";

function MainCategories() {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* LINK */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to={"/posts"}
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Web Design
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Development
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Database
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Search Engine
        </Link>
        <Link
          to={"/posts?cat=web-design"}
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Marketing
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* SEARCH */}
      <div className="bg-gray-100 p-2 rounded-full flex items-center justify-center gap-2">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div>
    </div>
  );
}

export default MainCategories;
