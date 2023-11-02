import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Random from "./pages/Random";
import Cocktails from "./pages/Cocktails";
import CocktailDetail from "./pages/CocktailDetail";
import NotFound from "./pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/random",
    element: <Random />,
  },
  {
    path: "/cocktails",
    element: <Cocktails />,
  },
  {
    path: "/cocktail/:id",
    element: <CocktailDetail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { Router };
