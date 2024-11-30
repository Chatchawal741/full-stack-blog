import { Link } from "react-router-dom";
import Search from "./Search";

function SideMenu() {
  return (
    <div className="px-4 h-max sticky top-8">
      {/* Search */}
      <h1 className="mb-4 text-sm font-medium">Search</h1>
      <Search />
      {/* Filters */}
      <h1 className="my-4 text-sm font-medium">Filter</h1>
      <div className="flex flex-col gap-2 text-sm">
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"newest"}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Newest
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"most-popular"}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Most Popular
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"trending"}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Trending
        </label>
        <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="sort"
            value={"oldest"}
            className="appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"
          />
          Oldest
        </label>
      </div>
      {/* Categories */}
      <h1 className="my-4 text-sm font-medium">Categories</h1>
      <div className="flex flex-col gap-2 text-sm">
        <Link className="underline" to={"/posts?cat="}>
          All
        </Link>
        <Link className="underline" to={"/posts?cat=web-design"}>
          Web Design
        </Link>
        <Link className="underline" to={"/posts?cat=developments"}>
          Development
        </Link>
        <Link className="underline" to={"/posts?cat=databases"}>
          Database
        </Link>
        <Link className="underline" to={"/posts?cat=seo"}>
          Search Engines
        </Link>
        <Link className="underline" to={"/posts?cat=marketing"}>
          Marketing
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
