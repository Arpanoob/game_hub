import { createBrowserRouter } from "react-router-dom";
import Home from "../viewModel/Home";
import Layout from "../container/Layout";
import GameDetails from "../container/GameDetails";

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "games/:id", element: <GameDetails /> },
    ],
  },
]);
