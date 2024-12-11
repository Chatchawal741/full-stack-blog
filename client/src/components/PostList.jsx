import PostListItems from "./PostListItem";
import { useQuery } from "@tanstack/react-query";

const fetchPost = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};

function PostList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostListItems />
    </div>
  );
}

export default PostList;
