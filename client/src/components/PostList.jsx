import PostListItems from "./PostListItem";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam }) => {
  console.log("pageParam", pageParam);

  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/posts?` +
      new URLSearchParams({
        page: pageParam,
      }).toString()
  );

  return await res.json();
};

function PostList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  });

  console.log("infinite scroll data", data);

  const allPosts = data?.pages?.flatMap((page) => page.posts) || [];

  if (isFetching && !isFetchingNextPage) return "Loading...";

  if (error) return "Something went wrong: " + error.message;

  return (
    <div className="flex flex-col gap-12 mb-8">
      {allPosts.map((post) => (
        <PostListItems key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
