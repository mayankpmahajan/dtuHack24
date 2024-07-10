import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./routes/layout/layout";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import NewPostPage from "./routes/newPostPage/newPostPage";
import {profilePageLoader} from "./lib/loaders";
import Analysis_form from "./routes/analysis_form/analysis_form";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        // {
        //   path: "/",
        //   element: <HomePage />,
        // },
        // {
        //   path: "/list",
        //   element: <ListPage />,
        //   loader: listPageLoader,
        // },
        // {
        //   path: "/:id",
        //   element: <SinglePage />,
        //   loader: singlePageLoader,
        // },

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
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/add",
          element: <NewPostPage />,
        },
      ],
    },
    {
      path:"/anal",
      element:<Analysis_form/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
