import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// components
import Homepage from "./Routes/Homepage.jsx";
import PostListPage from "./Routes/PostListPage.jsx";
import Login from "./Routes/Login.jsx";
import Register from "./Routes/Register.jsx";
import Write from "./Routes/Write.jsx";
import SinglePostPage from "./Routes/SinglePostPage.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
// router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import clerk provider
import { ClerkProvider } from "@clerk/clerk-react";
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// check if publishable key exists
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// router
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
