import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

function PostListPage() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <button
        onClick={() => setOpen((pre) => !pre)}
        className="md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row">
        {/* post list */}
        <div className="">
          <PostList />
        </div>
        {/* side menu */}
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  );
}

export default PostListPage;
