import { useAuth, useUser } from "@clerk/clerk-react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Upload from "../components/Upload";
import Image from "../components/Image";

function Write() {
  const { isLoaded, isSignedIn } = useUser();
  const [content, setContent] = useState("");
  const { getToken } = useAuth();
  const navigate = useNavigate();
  const [cover, setCover] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");

  useEffect(() => {
    image &&
      setContent(
        (prev) => prev + `<p class="w-12"><image src="${image.url}"/></p>`
      );
  }, [image]);

  useEffect(() => {
    video &&
      setContent(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      );
  }, [video]);

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
      console.log("res data", data);

      // navigate(`/${data.slug}`);
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

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      catagory: formData.get("catagory"),
      desc: formData.get("desc"),
      content: content,
    };
    if (data.title == "") {
      return false;
    }

    console.log("Data", data);

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
        {cover.filePath && (
          <Image
            src={cover.filePath || null}
            w={"200"}
            h={"200"}
            className={"rounded-2xl"}
          />
        )}
        <div className="flex">
          <Upload setData={setCover} setProgress={setProgress} type={"image"}>
            <button
              type="button"
              className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white"
            >
              {cover.filePath ? "Change cover image" : "Adds a cover image"}
            </button>
          </Upload>
        </div>
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
        <div className="flex flex-1">
          <div className="flex flex-col gap-2 mr-2">
            <Upload setData={setImage} setProgress={setProgress} type={"image"}>
              🖼️
            </Upload>
            <Upload setData={setVideo} setProgress={setProgress} type={"video"}>
              ▶️
            </Upload>
          </div>
          {/* text editor */}
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            onChange={setContent}
            value={content}
            readOnly={progress > 0 && progress < 100}
          />
        </div>
        {/* submit button */}
        <button
          disabled={mutation.isPending || (progress > 0 && progress < 100)}
          type="submit"
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
        {"Progress:" + progress}
        {mutation.isError && <span>{mutation.error.message}</span>}
      </form>
    </div>
  );
}

export default Write;
