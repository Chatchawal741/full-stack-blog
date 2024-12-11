import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Write() {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      // get auth token from clerk
      const token = await getToken();
      return await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newPost),
      });
    },
    // when successed return to new post page
    onSuccess: async (res) => {
      toast.success("Post has been created");
      const data = await res.json();
      navigate(`/${data.slug}`);
    },
  });

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    if (!formData) {
      return false;
    }

    const data = {
      title: formData.get("title"),
      catagory: formData.get("catagory"),
      desc: formData.get("desc"),
      content: content,
    };

    console.log(data);

    mutation.mutate(data);
  };

  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      {/* title */}
      <h1 className="text-xl font-light">Create a New Post</h1>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6  flex-1 mb-6"
      >
        <button
          type="button"
          className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"
        >
          Adds a cover image
        </button>
        <input
          type="text"
          placeholder="My Awesome Story"
          className="text-4xl font-semibold bg-transparent outline-none"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="categories" className="text-sm">
            Choose a category:
          </label>
          <select name="catagory" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="Development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <textarea
          name="desc"
          placeholder="A short Description"
          className="p-4 rounded-xl bg-white shadow-md"
        />
        <div className="flex">
          <div className="flex flex-col gap-2 mr-2">
            <div className="cursor-pointer">🍪</div>
            <div className="cursor-pointer">▶️</div>
          </div>
          {/* text editor */}
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            onChange={setContent}
          />
        </div>
        {/* submit button */}
        <button
          disabled={mutation.isPending}
          type="submit"
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
}

export default Write;
