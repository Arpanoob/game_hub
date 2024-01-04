import { createBrowserRouter } from "react-router-dom";
import Home from "../viewModel/Home";
import Layout from "../container/Layout";
import GameDetails from "../container/GameDetails";
import Error from "../container/Error";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <Home /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);
